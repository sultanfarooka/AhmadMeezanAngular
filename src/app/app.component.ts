import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quick Look Acuistics';
  sideMenu = false;


  xmarkIcon = faXmark;


  toggleSideMenu(){
    this.sideMenu = !this.sideMenu;
  }
  


}
