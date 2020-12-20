import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CONSTANTS } from '../constant/constants';
import { Login } from '../models/login.model';
import { Role } from '../models/role.model';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login: Login = new Login();
  returnURL: string;
  roles: Role[]

  constructor(private userRole: RolesService, private router: Router) { }

  ngOnInit() {
    this.userRole.getAllRoles().subscribe(res => {
      this.roles = res['Data'];
      localStorage.setItem(CONSTANTS.ROLES, JSON.stringify(this.roles));
    })
  }

  onSubmit(form: NgForm) {

    this.login.username = form.value.email;
    this.login.password = form.value.password;
    this.login.roleId = form.value.role;

    if(this.login.roleId){
      var userRoles: Role[] = JSON.parse(localStorage.getItem(CONSTANTS.ROLES));
      console.log('role', userRoles);

      if(userRoles){
        for(let i=0; i<userRoles.length; i++){
          if(userRoles[i].roleId.toString() === this.login.roleId.toString()){
            this.returnURL = CONSTANTS.URL_MAPPING[userRoles[i].roleName.toLowerCase()]
            ['dashboard'];
          }
        }
      }
    }
    this.router.navigate([this.returnURL]);



    }





}
