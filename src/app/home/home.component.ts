import { Component, OnInit } from '@angular/core';
import { faArrowsRotate, faFileArrowDown, faFileArrowUp, faListCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  chanels = ['M256', 'M257' , 'M259', 'OM654', 'OM655']
  selectedCh = 'M259';
  saveConfigIcon = faFileArrowDown;
  loadConfigIcon = faFileArrowUp;
  jobStatusIcon = faListCheck;
  resetSelection = faArrowsRotate;




  
  ngOnInit(): void {
  }
  selectCh(){
    this.selectedCh
  }


  


}
