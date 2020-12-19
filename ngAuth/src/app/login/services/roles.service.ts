import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONSTANTS } from '../constant/constants';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roleServicesURL = CONSTANTS.hostURL + '/userRoles';

  constructor(private _HTTP: HttpClient) { }

  getAllRoles() {
    return this._HTTP.get<Role[]>(this.roleServicesURL);
  }
}
