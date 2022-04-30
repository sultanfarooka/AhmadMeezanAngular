import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AccountService } from './account.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css'],
})
export class OauthComponent implements OnInit, OnDestroy {
  isUserAuthenticated = false;
  subscription: Subscription;
  userName: string;

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.subscription = this.accountService.isUserAuthenticated.subscribe(
      (isAuthenticated) => {
        this.isUserAuthenticated = isAuthenticated;
        if (this.isUserAuthenticated) {
          fetch(`${environment.apiUrl}/home/name`)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
          this.httpClient
            .get(`${environment.apiUrl}/home/name`, {
              responseType: 'text',
              withCredentials: true,
            })
            .subscribe((theName) => {
              this.userName = theName;
            });
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    this.accountService.login();
  }
}
