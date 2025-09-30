import { CanActivateFn } from '@angular/router';

export const AuthGuardGuard: CanActivateFn = (route, state) => {
  return false;
};
