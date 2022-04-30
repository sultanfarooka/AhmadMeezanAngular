import { of } from 'rxjs-compat/observable/of';
import { catchError } from 'rxjs-compat/operators/catchError';

import { AccountService } from './account.service';

export function checkIfUserIsAuthenticated(accountService: AccountService) {
  return () => {
    return accountService
      .updateUserAuthenticationStatus()
      .pipe(
        catchError((response) => {
          if (response.error.Success == false) {
            accountService.setUserAsNotAuthenticated();
            return of(null);
          } else {
            console.log(response);
            return of(null);
          }
        })
      )
      .toPromise();
  };
}
