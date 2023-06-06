import { Controller, Param, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserDetails } from './user-details.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
}
