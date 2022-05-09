import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@circlon/angular-tree-component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { JobStatusComponent } from './job-status/job-status.component';

import { checkIfUserIsAuthenticated } from './oauth/check-login-intializer';
import { Interceptor401Service } from './oauth/interceptor401.service';
import { AccountService } from './oauth/account.service';
import { OauthComponent } from './oauth/oauth.component';
import { JobStatusDropdownComponent } from './home/job-status-dropdown/job-status-dropdown.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';
import { ChannelModalComponent } from './home/channel-modal/channel-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NotfoundComponent,
    TreeComponentComponent,
    JobStatusComponent,
    OauthComponent,
    JobStatusDropdownComponent,
    NotAuthenticatedComponent,
    ChannelModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TreeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor401Service,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: checkIfUserIsAuthenticated,
      multi: true,
      deps: [AccountService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
