import { Component } from '@angular/core';
import { faXmark, faBell, faBrush, faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  xmarkIcon = faXmark;
  bellIcon = faBell;
  themeIcon = faBrush;
  jobStatusIcon = faListCheck;


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
