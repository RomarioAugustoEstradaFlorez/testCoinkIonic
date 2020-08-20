import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncryptService } from '../encrypt/encrypt.service'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private encryptService: EncryptService
  ) { }


  signUpV2(data): Observable<any> {
    let EncryptData = this.encryptService.encrypt(JSON.stringify(data), environment.keyCryptDecrypt);
    return this.http.post(environment.api + '/signup/v2?apiKey=' + environment.apiKey, { "payload": EncryptData }, { 'headers': this.headers });
  }

  signUpCifin(data): Observable<any> {
    let EncryptData = this.encryptService.encrypt(JSON.stringify(data), environment.keyCryptDecrypt);
    // this.encryptService.encrypt()
    return this.http.post(environment.api + '/signup/cifin?apiKey=' + environment.apiKey, { "payload": EncryptData }, { 'headers': this.headers });
  }

  login(data): Observable<any> {
    let EncryptData = this.encryptService.encrypt(JSON.stringify(data), environment.keyCryptDecrypt);
    return this.http.post(environment.api + '/login/verifyDirectLogin?apiKey=' + environment.apiKey, { "payload": EncryptData }, { 'headers': this.headers });
  }

  testEncrypt(data) {
    let EncryptData = this.encryptService.encrypt(JSON.stringify(data), environment.keyCryptDecrypt)
    // console.log('EncryptData > ', EncryptData)
    return EncryptData
  }

  testDecrypt(hash) {
    let DecryptData = this.encryptService.decrypt(hash, environment.keyCryptDecrypt)
    // console.log('DecryptData > ', DecryptData)
    return DecryptData
  }

  // Signup/v2 
  // signup/cifin
  // Login/verifyDirectLogin

  // {“payload”:”[cuerpo JSON serializado y cifrado]”}
}
