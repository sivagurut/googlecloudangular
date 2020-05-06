import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

   
    if (username === 'test' && password === 'test@123') {
      sessionStorage.setItem('authenticaterUser', username);
      sessionStorage.setItem('basicAuthHeaderString', basicAuthHeaderString);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  getToken(){
    return sessionStorage.getItem('basicAuthHeaderString');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
