import jwt_decode from 'jwt-decode';
import { Injectable } from "@angular/core";
import { UserModel } from '../Models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class AppConfigurationService{
  private _userRawData: any;
  public get UserRawData(): any {
    return this._userRawData;
  }
  public set UserRawData(value: any) {
    this._userRawData = value;
  }
  private _userModelData: UserModel;
  public get UserModelData(): UserModel {
    return this._userModelData;
  }
  public set UserModelData(value: UserModel) {
    this._userModelData = value;
  }

  constructor(){
    let tokenString: string = localStorage['auth_app_token'];
    let tokenJson = JSON.parse(tokenString);
    let token = tokenJson.value;
    console.log('jwt', token);
    this._userRawData = jwt_decode(token);
    console.log('decoded', this._userRawData);
    this.UserModelData = {
      userId: this._userRawData.UserId,
      userName: this._userRawData.UserName,
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      userRoles: [],
      userRoleIds: [],
      accountBalance: 0
    }
    
    if (!this._userRawData.UserRoleIds.includes(',')) {
      this.UserModelData.userRoleIds = [Number.parseInt(this._userRawData.UserRoleIds)];
    }
    else {
      let roleIdArrStr = this._userRawData.UserRoleIds.split(',');
      this.UserModelData.userRoleIds = roleIdArrStr.map((role: any) => Number.parseInt(role));
    }
    
    if (!this._userRawData.UserRoles.includes(',')) {
      this.UserModelData.userRoles = [this._userRawData.UserRoleIds];
    }
    else {
      this.UserModelData.userRoles = this._userRawData.UserRoles.split(',');
    }
    
    console.log('local user model', this.UserModelData);
  }

  isMobilePhone(): boolean {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
    return isMobile && !isTablet;
  }
}
