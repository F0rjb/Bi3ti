import {
  Controller,
  Request,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserDetails } from './user-details.interface';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('else/:id')
  getUser(
    @Param('id') id: string,
  ): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
  @UseGuards(JwtGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
