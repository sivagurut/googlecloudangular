import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DEMO_API_URL,API_URL } from './../../../app.constants';
export class HelloWorldBean {
  constructor(public message:string){ }
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${DEMO_API_URL}/hello-world-bean`);    
  } 
  executeHelloWorld() {
    return this.http.get(`${API_URL}`);    
  } 
  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`${DEMO_API_URL}/hello-world/path-variable/${name}`);    
  }

}
