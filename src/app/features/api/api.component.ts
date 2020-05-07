import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  helloApi: any;
  helloBean: any;
  helloBeanPathVariable: any;
  ngOnInit(): void {
    this.getHelloApi();
    this.getHelloBean();
    this.getHelloBeanPathVariable('World!');
  }
  getHelloApi(){
    this.apiService.executeHelloWorld().subscribe( data => {
      console.log(data);
      this.helloApi = data;
      
    },
    error => {
      console.log(error)
    
    });
  }
  getHelloBean(){
    this.apiService.executeHelloWorldBeanService().subscribe( data => {
      console.log(data);
      this.helloBean = data;
    },
    error => {
      console.log(error)
    
    });
  }
  getHelloBeanPathVariable(pathvariable:string){
    this.apiService.executeHelloWorldServiceWithPathVariable(pathvariable).subscribe( data => {
      console.log(data);
      this.helloBeanPathVariable = data;
    },
    error => {
      console.log(error)
    
    });
  }
}
