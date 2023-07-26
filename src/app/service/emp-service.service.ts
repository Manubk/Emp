import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpDetails } from '../models/emp-details';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  baseUrl:string='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  getAllEmp(){
   return this.http.get(this.baseUrl+'emps');
  }

  deleteEmp(empId:number){
    return this.http.delete(this.baseUrl+'emp/'+empId);
  }

  saveEmp(emp:EmpDetails){
    return this.http.post(this.baseUrl+'emp',emp);
  }

  updateEmp(emp:EmpDetails){
    return this.http.put(this.baseUrl+'emp',emp);
  }

}
