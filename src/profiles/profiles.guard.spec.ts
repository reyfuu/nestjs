// import { ProfilesGuard } from './profiles.guard';

// describe('ProfilesGuard', () => {
//   it('should be defined', () => {
//     expect(new ProfilesGuard()).toBeDefined();
//   });
// });

import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}