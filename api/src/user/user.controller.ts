import { Controller, Param, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserDetails } from './user-details.interface';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.UserService.findById(id);
  }
}
