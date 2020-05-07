import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HELLO_API_URL,API_URL } from './../../../app.constants';
export class HelloWorldBean {
  constructor(public message:string){ }
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(): Observable<any> {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/hello-world-bean`);    
  } 
  executeHelloWorld(): Observable<any> {
    return this.http.get<any>(`${API_URL}/`);    
  } 
  executeHelloWorldServiceWithPathVariable(name): Observable<any> {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/hello-world/path-variable/${name}`);    
  }
    
  executeIndexService(): Observable<any> {
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/index`);    
  } 
  executeApiService() : Observable<any>{
    return this.http.get<HelloWorldBean>(`${HELLO_API_URL}/api`);    
  }  
 

}
