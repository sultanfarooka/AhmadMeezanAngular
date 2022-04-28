import { Component, OnInit } from '@angular/core';
import { faPlay, faPause, faStop, faList } from '@fortawesome/free-solid-svg-icons';
import { JobStatusService } from '../services/job-status.service';
@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css']
})
export class JobStatusComponent implements OnInit {

  constructor(public jobStatusService: JobStatusService) { }

  ngOnInit(): void {
    this.jobStatusService.startConnection();

    setTimeout(this.jobStatusService.listenJobStatus, 2000);


  }

  playIcon = faPlay;
  pauseIcon = faPause;
  stopIcon = faStop;
  detailIcon = faList;

}
