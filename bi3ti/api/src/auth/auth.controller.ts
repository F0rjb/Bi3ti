import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from './../user/user-details.interface';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';
import { HttpCode } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post('register')
  register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
    return this.authService.register(user);
  }
  @Post('login')
  @HttpCode(201)
  login(@Body() user: ExistingUserDTO): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }
}
