import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobStatusDropdownComponent } from './home/job-status-dropdown/job-status-dropdown.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OauthComponent } from './oauth/oauth.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'jobStatus', component: JobStatusComponent },
  { path: 'oauth/redirect', component: OauthComponent },
  { path: 'home/job-status-dropdown', component: JobStatusDropdownComponent },
  { path: 'notauthenticated', component: NotAuthenticatedComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
