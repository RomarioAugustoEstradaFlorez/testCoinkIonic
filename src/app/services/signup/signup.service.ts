import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncryptService } from '../encrypt/encrypt.service'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,
    private encryptService: EncryptService
  ) { }


  signUpV2(data): Observable<any> {
    let EncryptData = this.encryptService.encrypt(data, environment.apiKey);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.apiKey
    })
    return this.http.post(environment.api + '/Signup/v2', { "payload": EncryptData }, { 'headers': headers });
  }

  signUpCifin(data): Observable<any> {
    let EncryptData = this.encryptService.encrypt(data, environment.apiKey);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.apiKey
    })
    // this.encryptService.encrypt()
    return this.http.post(environment.api + '/Signup/cifin', { "payload": EncryptData }, { 'headers': headers });
  }

  login(data): Observable<any> {
    let EncryptData = this.encryptService.encrypt(data, environment.apiKey);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.apiKey
    })
    return this.http.post(environment.api + '/Login/verifyDirectLogin', { "payload": EncryptData }, { 'headers': headers });
  }

  // Signup/v2 
  // signup/cifin
  // Login/verifyDirectLogin

  // {“payload”:”[cuerpo JSON serializado y cifrado]”}
}
