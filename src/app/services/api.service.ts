import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  timeseriesUrl = 'https://localhost:44395/api/timeseries/49';

  constructor(private httpClient: HttpClient) { }

  getInfo(): Observable<any> {
    console.log('Here in the apiService');
    return this.httpClient.get(this.timeseriesUrl);
  }

}
