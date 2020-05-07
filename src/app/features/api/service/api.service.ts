import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_URL,HELLO_API_URL } from './../../../app.constants';
export class HelloWorldBean {
  constructor(public message:string){ }
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/hello-world-bean`);    
  } 
  executeIndexService() {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/index`);    
  } 
  executeApiService() {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/api`);    
  }  
  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/hello-world/path-variable/${name}`);    
  }
   executeHelloWorld() {
    return this.http.get(`${API_URL}`);    
  } 

}
