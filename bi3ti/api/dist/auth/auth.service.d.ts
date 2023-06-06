import { UserService } from 'src/user/user.service';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { ExistingUserDTO } from './../user/dtos/existing-user.dto';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    register(user: Readonly<NewUserDTO>): Promise<UserDetails | any>;
    doesPasswordMatch(passwrod: string, hashedPassword: string): Promise<boolean>;
    validateUser(email: string, password: string): Promise<UserDetails | null>;
    login(existingUser: ExistingUserDTO): Promise<{
        token: string;
    } | null>;
}
