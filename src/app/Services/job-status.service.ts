import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Job, JobStatus } from '../models/jobStatusModel';

@Injectable({
  providedIn: 'root',
})
export class JobStatusService {
  constructor() {}

  public hubConnection: signalR.HubConnection;

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://xyz_server:44382/api/jobs', {
        headers: { withCredentials: 'true' },
      })
      .build();

    this.hubConnection
      .start()
      .then((res: any) => {
        console.log('Connection Started');
        console.log(res);
      })
      .catch((err: any) =>
        console.log('Error while starting a connection: ' + err)
      );
  };

  listenJobStatus = () => {
    this.hubConnection.on('JobsList', (status: JobStatus) => {
      console.log(status);
    });
  };
}
