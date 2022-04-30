import { Component, OnInit } from '@angular/core';
import {
  faPlay,
  faPause,
  faStop,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { JobStatus } from '../models/jobStatusModel';
import { JobStatusService } from '../services/job-status.service';
@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css'],
})
export class JobStatusComponent implements OnInit {
  constructor(public jobStatusService: JobStatusService) {}

  JobStatus1: JobStatus[] = [];

  ngOnInit(): void {
    this.jobStatusService.startConnection();

    this.jobStatusService.hubConnection.on(
      'JobsList',
      (status: JobStatus[]) => {
        console.log(status);
        this.JobStatus1 = status;
        console.log(this.JobStatus1);
      }
    );
  }

  playIcon = faPlay;
  pauseIcon = faPause;
  stopIcon = faStop;
  detailIcon = faList;
}
