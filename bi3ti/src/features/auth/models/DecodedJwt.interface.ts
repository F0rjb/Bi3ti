import { DisplayUser } from './DisplayUser.interface';

export interface DecodedJwtResponse {
  user: DisplayUser;
  exp: number;
  iat: number;
}
