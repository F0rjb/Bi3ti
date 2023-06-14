import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { ExistingUserDTO } from './../user/dtos/existing-user.dto';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
  async register(
    user: Readonly<NewUserDTO>,
  ): Promise<UserDetails | any> {
    const { name, email, password } = user;
    const existingUser = await this.userService.findByEmail(
      email,
    );
    if (existingUser)
      throw new HttpException(
        'Credentials already in use',
        HttpStatus.NOT_FOUND,
      );
    const hashedPassword = await this.hashPassword(
      password,
    );
    const newUser = await this.userService.create(
      name,
      email,
      hashedPassword,
    );
    const jwt = await this.jwtService.signAsync({ user });
    return {
      user: this.userService._getUserDetails(newUser),
      jwt,
    };
  }

  async doesPasswordMatch(
    passwrod: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(passwrod, hashedPassword);
  }
  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDetails | null> {
    const user = await this.userService.findByEmail(email);
    const doesUserExist = !!user;
    if (!doesUserExist) return null;
    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.password,
    );
    if (!doesPasswordMatch)
      throw new HttpException(
        'Bad Credentials',
        HttpStatus.NOT_FOUND,
      );
    return this.userService._getUserDetails(user);
  }
  async login(
    existingUser: ExistingUserDTO,
  ): Promise<{ token: string; user: UserDetails } | null> {
    const { email, password } = existingUser;
    const user = await this.validateUser(email, password);
    if (!user)
      throw new HttpException(
        'invalid Credentials',
        HttpStatus.NOT_FOUND,
      );
    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt, user: user };
  }
}
