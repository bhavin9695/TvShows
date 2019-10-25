import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  headers = new HttpHeaders({
    Accept: 'application/json'
  });

  get(path: string, customHeaders?, withCredentials = false): Observable<any> {
    return this.http.get(
      path,
      {
        headers: customHeaders || this.headers,
        withCredentials
      }
    ).pipe(catchError(throwError.bind(this)));
  }

  post(path: string, body, customHeaders?, method = 'Post', withCredentials = false): Observable<any> {
    return this.http.request(
      method,
      path,
      {
        body,
        headers: customHeaders || this.headers,
        withCredentials
      }
    ).pipe(catchError(throwError.bind(this)));
  }

  put(path: string, body: any, customHeaders?, withCredentials = false): Observable<any> {
    return this.post(path, body, customHeaders, 'Put', withCredentials);
  }

  patch(path: string, body: any, customHeaders?, withCredentials = false): Observable<any> {
    return this.post(path, body, customHeaders, 'Patch', withCredentials);
  }

}
