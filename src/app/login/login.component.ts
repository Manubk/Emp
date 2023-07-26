import { Component } from '@angular/core';
import { LoginCre } from '../models/login-cre';
import { SecurityServiceService } from '../service/security-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string ='';
  pass:string='';

  login1!:LoginCre ;
  constructor(private sercurity:SecurityServiceService){}


  login(){
   this.login1 =  new LoginCre();
    this.login1.email = this.email;
    this.login1.pass=this.pass;
    this.sercurity.login(this.login1).subscribe((res:any) =>{
      alert(res);
    })
  }
}
