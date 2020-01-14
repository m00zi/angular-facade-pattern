import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NetworkService {
  constructor(private http: HttpClient) { }

  private _formatErrors(error: any) {
    return throwError(error);
  }

  get<T>(environment: string, path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment}${path}`, { params })
      .pipe(catchError(this._formatErrors));
  }

  put<T>(environment: string, path: string, body: object = {}): Observable<T> {
    return this.http.put<T>(
      `${environment}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this._formatErrors));
  }

  post<T>(environment: string, path: string, body: object = {}): Observable<T> {
    return this.http.post<T>(
      `${environment}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this._formatErrors));
  }

  delete<T>(environment: string, path: string): Observable<T> {
    return this.http.delete<T>(
      `${environment}${path}`
    ).pipe(catchError(this._formatErrors));
  }

  patch<T>(environment: string, path: string, body: object = {}): Observable<T> {
    return this.http.patch<T>(
      `${environment}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this._formatErrors));
  }
}
