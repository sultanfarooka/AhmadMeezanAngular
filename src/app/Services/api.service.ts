import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { apiEndPoints } from './apiEndPoints';
import { depot, depotApiRes } from '../models/depotModels';
import { ChannelData } from '../Models/channelModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //BASE URL FOR THE API ENDPOINT
  constructor(private http: HttpClient) { }

  //HTTP OPTIONS 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  //GET REQUEST -> GETS ROOTS NODES FOR MEASUREMENTS
  getRootNodes(): Observable<depotApiRes> {
    return this.http
      .get<depotApiRes>(apiEndPoints.measurementTreeNodesApi)
      .pipe(retry(1), catchError(this.handleError));
  }

  getChilNodes(depotContentBrowseURL: string): Observable<depotApiRes> {
    return this.http
      .get<depotApiRes>(apiEndPoints.measurementTreeChildNodesApi2)
      .pipe(catchError(this.handleError));
  }

  getChannelsData(): Observable<ChannelData[]> {
    return this.http
      .get<ChannelData[]>(apiEndPoints.channelsDataApi)
      .pipe(catchError(this.handleError))
  }



  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }





}
