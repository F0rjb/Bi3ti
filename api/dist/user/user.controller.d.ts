import { UserService } from 'src/user/user.service';
import { UserDetails } from './user-details.interface';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getUser(id: string): Promise<UserDetails | null>;
}
