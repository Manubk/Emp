import { Component } from '@angular/core';
import { SecurityServiceService } from './service/security-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpManagement';

  constructor(private secirity:SecurityServiceService,private rout:Router){}

  ngOnInit(){
    if(this.secirity.logedIn == false ){}
      // this.rout.navigate(['login']);
  }
}
