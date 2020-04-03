import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HandleError, HttpErrorHandlerService } from './core/http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  configUrl = '/api/login';
  redirectUrl: string;

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('AuthenticationService');
  }

  fakeCheckLogin(user): any {
    return this.http.get<any>(
      `${this.configUrl}?email=${user.email}&password=${user.password}`
    )
    .pipe(
      catchError(this.handleError<any>('login'))
    );
  }

  getToken(): string {
    return localStorage.getItem(`${environment.hash}_token`);
  }

  login(): void {
    localStorage.setItem(`${environment.hash}_token`, 'TOKEN_VALUE');
  }

  logout(): void {
    localStorage.removeItem(`${environment.hash}_token`);
  }
}
