import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class JobStatusService {

  constructor() { }

  private hubConnection: signalR.HubConnection

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7112/JobStatus").build();

    this.hubConnection.start()
      .then((res) => { console.log("Connection Started"); console.log(res) })
      .catch((err) => console.log("Error while starting a connection: " + err));
  }


  listenJobStatus = () => {
    this.hubConnection.on('SendJobStatus', (status) => {
      console.log(status)
    })
  }
}
