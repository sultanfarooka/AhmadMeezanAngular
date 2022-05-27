import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  faXmark,
  faBell,
  faBrush,
  faListCheck,
  faUser,
  faEllipsisVertical,
  faArrowsRotate,
  faFileArrowUp,
  faFileArrowDown,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { JobStatus } from './models/jobStatusModel';
import { userNameRes } from './models/userNameModel';
import { AccountService } from './oauth/account.service';
import { ApiService } from './services/api.service';
import { JobStatusService } from './services/job-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private accountService: AccountService,
    private router: Router,
    public jobStatusService: JobStatusService
  ) {}

  HomeCompChild: HomeComponent;

  closeDropDown = true;

  SaveConfig() {
    this.HomeCompChild.SaveConfig();
  }

  ImportFile(event: Event) {
    this.HomeCompChild.ImportFile(event);
  }

  resetConfig() {
    this.HomeCompChild.resetConfig();
  }

  isUserAuthenticated: boolean = true;
  subscription: Subscription;
  userName: string;

  xmarkIcon = faXmark;
  bellIcon = faBell;
  themeIcon = faBrush;
  jobStatusIcon = faClipboardList;
  userIcon = faUser;
  optionsIcon = faEllipsisVertical;
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  resetSelection = faArrowsRotate;
  JobStatus1: JobStatus[]

  themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ];

  changeTheme(theme: string) {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }

  title = 'Quick Look Acuistics';
  sideMenu = false;

  toggleSideMenu() {
    this.sideMenu = !this.sideMenu;
  }

  onActivate(compRef: any) {
    this.HomeCompChild = compRef;
  }

  ngOnInit(): void {
    // this.apiService.getUserName().subscribe((data: userNameRes) => {
    //   this.userName = data.Data;
    // });

    this.subscription = this.accountService.isUserAuthenticated.subscribe(
      (isAuthenticated) => {
        this.isUserAuthenticated = (isAuthenticated as any).Success;
        if (this.isUserAuthenticated == true) {
          this.apiService.getUserName().subscribe((data: userNameRes) => {
            this.userName = data.Data;

            this.jobStatusService.startConnection();

    this.jobStatusService.hubConnection.on(
      'JobsList',
      (status: JobStatus[]) => {
        console.log(status);
        this.JobStatus1 = status;
        console.log(this.JobStatus1);
      }
    );
          });
        }
      }
    );
  }
}
