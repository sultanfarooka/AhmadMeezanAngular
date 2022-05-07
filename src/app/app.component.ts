import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { faXmark, faBell, faBrush, faListCheck, faUser, faEllipsisVertical, faArrowsRotate, faFileArrowUp, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild(HomeComponent) HomeCompChild: HomeComponent;
  @ViewChildren(HomeComponent) HomeCompChild: QueryList<HomeComponent>

  SaveConfig() {
    console.log(this.HomeCompChild);
  }

  ImportFile(event: Event) {
    // this.HomeCompChild.ImportFile(event);
  }

  resetConfig() {
    // this.HomeCompChild.resetConfig();
  }



  xmarkIcon = faXmark;
  bellIcon = faBell;
  themeIcon = faBrush;
  jobStatusIcon = faListCheck;
  userIcon = faUser;
  optionsIcon = faEllipsisVertical
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  resetSelection = faArrowsRotate;

  themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]


  changeTheme(theme: string) {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }

  title = 'Quick Look Acuistics';
  sideMenu = false;

  toggleSideMenu() {
    this.sideMenu = !this.sideMenu;
  }




}
