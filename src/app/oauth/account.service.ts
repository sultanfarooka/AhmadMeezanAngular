import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs-compat/operators/tap';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { apiEndPointsDev, apiEndPointsLocalDev } from '../services/apiEndPoints';

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
  ) { }


  apiEndPoint = environment.devEnv == 'local' ? apiEndPointsLocalDev : apiEndPointsDev;

  updateUserAuthenticationStatus() {
    return this.httpClient
      .get<boolean>(this.apiEndPoint.baseURL + this.apiEndPoint.isAuthenticated, {
        withCredentials: true,
      })
      .pipe(
        tap((isAuthenticated) => {
          this._isUserAuthenticatedSubject.next(isAuthenticated);
        })
      );
  }

  setUserAsNotAuthenticated() {
    this._isUserAuthenticatedSubject.next(true);
  }

  login() {

    this.document.location.href = this.apiEndPoint.baseURL + this.apiEndPoint.authenticate;
  }
}
