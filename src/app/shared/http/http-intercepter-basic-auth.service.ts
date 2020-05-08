import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private authenticationService : AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.authenticationService.getToken();
    let username = this.authenticationService.isUserLoggedIn()

     let customReq;
 
      customReq = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Cache-Control', 'no-cache')
          .set('Pragma', 'no-cache')
      });
    
    return next.handle(customReq);
  }


}
