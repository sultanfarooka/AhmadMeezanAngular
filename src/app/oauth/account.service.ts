import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs-compat/operators/tap';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _isUserAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isUserAuthenticated: Observable<boolean> =
    this._isUserAuthenticatedSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private httpClient: HttpClient
  ) {}

  updateUserAuthenticationStatus() {
    return this.httpClient
      .get<boolean>(`${environment.apiUrl}/pakcloud/IsAuthenticated`, {
        withCredentials: true,
      })
      .pipe(
        tap((isAuthenticated) => {
          this._isUserAuthenticatedSubject.next(isAuthenticated);
        })
      );
  }

  setUserAsNotAuthenticated() {
    this._isUserAuthenticatedSubject.next(false);
  }

  login() {
    this.document.location.href = `${environment.apiUrl}/PAKcloud/Authenticate`;
  }
}
