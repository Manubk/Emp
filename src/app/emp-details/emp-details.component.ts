import { Component } from '@angular/core';
import { EmpDetails } from '../models/emp-details';
import { EmpServiceService } from '../service/emp-service.service';
import { NgForm } from '@angular/forms';
import { SecurityServiceService } from '../service/security-service.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {

  emps!:EmpDetails[] ;
  emp!:EmpDetails;
  selectedEmp:EmpDetails =  new EmpDetails();

  role:string = 'user';

  constructor(private empService:EmpServiceService , private security:SecurityServiceService){}

    ngOnInit(){
    this.findAllEmps();
    this.role = this.security.role;
    }

    editEmp(emp:EmpDetails){
      this.selectedEmp = emp;
      console.log(this.selectedEmp);
    }

    findAllEmps(){
      this.empService.getAllEmp().subscribe((data:any) => {
        console.log(data);
        this.emps = data;
      })
    }

    addEmp(emp:NgForm){
      console.log(emp.value);
      this.emp = emp.value;
      this.empService.saveEmp(this.emp).subscribe((data:any) => {
        this.emps = data;
      })
    }

    updateEmp(){
      console.log(this.selectedEmp);
      this.empService.updateEmp(this.selectedEmp).subscribe((data:any) => {
        this.emps = data;
      })
    }


    deleteEmp(empId:number){
      this.empService.deleteEmp(empId).subscribe((data:any) => {
        this.emps = data;
      })
    }


  
}
