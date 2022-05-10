import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { apiEndPointsProd, apiEndPointsDev, apiEndPointsLocalDev } from './apiEndPoints';
import { depot, depotApiRes } from '../models/depotModels';
import { userNameRes } from '../models/userNameModel'
import { ChannelData, ConfigRes } from '../Models/channelModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
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

  //API END POINT BASE ON THE ENVIROMENT
  //apiEndPoint = environment.production ? apiEndPointsProd : apiEndPointsDev;
  apiEndPoint = apiEndPointsLocalDev;


  //Get user name
  getUserName(): Observable<userNameRes> {
    return this.http.get<userNameRes>(this.apiEndPoint.baseURL + this.apiEndPoint.userName, {
      withCredentials: true,
    }).pipe(retry(1), catchError(this.handleError));
  }




  //GET REQUEST -> GETS ROOTS NODES FOR MEASUREMENTS
  getRootNodes(): Observable<depotApiRes> {
    return this.http
      .get<depotApiRes>(
        this.apiEndPoint.baseURL + this.apiEndPoint.measurementTreeNodesApi,
        {
          withCredentials: true,
        }
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  //
  /**
   * GET REQUEST --> GETS CHILDREN NODE FRO SELECTED TREE NODE
   * @param depotContentBrowseURL
   * @returns
   */
  getChilNodes(depotContentBrowseURL: string): Observable<depotApiRes> {
    return this.http
      .get<depotApiRes>(
        this.apiEndPoint.baseURL + this.apiEndPoint.measurementTreeNodesApi,
        {
          params: {
            browseUrl: depotContentBrowseURL,
          },
          withCredentials: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  //GET CONFIGURATIONS
  getChannelsData(): Observable<ConfigRes> {
    return this.http
      .get<ConfigRes>(
        this.apiEndPoint.baseURL + this.apiEndPoint.channelsDataApi
      )
      .pipe(catchError(this.handleError));
  }






  //ERROR HANDLING
  handleError(error: any) {
    console.log({ error });
    console.log((error.headers as Headers).get('x-powered-by'));
    console.log((error.headers as Headers).get('set-cookie'));
    if (error.url == '/api/PAKcloud/browseCloud') window.open(error.url); // use same window to redirect user
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
