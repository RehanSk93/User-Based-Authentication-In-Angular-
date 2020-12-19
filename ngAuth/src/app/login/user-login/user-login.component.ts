import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../constant/constants';
import { Role } from '../models/role.model';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  roles: Role[]

  constructor(private userRole: RolesService) { }

  ngOnInit() {
    this.userRole.getAllRoles().subscribe(res => {
      this.roles = res['Data'];
      localStorage.setItem(CONSTANTS.ROLES, JSON.stringify(this.roles));
    })
  }

}
