import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginCre } from '../models/login-cre';
import { EmpDetails } from '../models/emp-details';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {

  baseUrl:string = 'http://localhost:8080/';

  role:string = '';
  logedIn:boolean = false;
  
  constructor(private http:HttpClient) { }

   login(logIn:LoginCre ){
     return  this.http.post(this.baseUrl+'login',logIn);
  }

 signUp(singUp:EmpDetails){
    return this.http.post(this.baseUrl+'singup',singUp);
  }
}
