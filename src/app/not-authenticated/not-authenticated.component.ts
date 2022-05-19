import { Component, OnInit } from '@angular/core';
import { AccountService } from '../oauth/account.service';

@Component({
  selector: 'app-not-authenticated',
  templateUrl: './not-authenticated.component.html',
  styleUrls: ['./not-authenticated.component.css'],
})
export class NotAuthenticatedComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  Authenticate() {
    this.accountService.login();
  }
}
