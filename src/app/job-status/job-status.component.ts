import { Component, OnInit } from '@angular/core';
import { faPlay, faPause, faStop, faList } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css']
})
export class JobStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playIcon = faPlay;
  pauseIcon = faPause;
  stopIcon = faStop;
  detailIcon = faList;

}
