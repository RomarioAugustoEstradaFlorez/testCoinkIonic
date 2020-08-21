import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    public storage: Storage
  ) { }

  public async getItem(name) {
    return new Promise((resolve, reject) => {
      this.storage.get(name).then((val) => {
        resolve(val);
      }, (err) => {
        reject(null);
      })
    })
  }

  public setItem(name, value) {
    this.storage.set(name, value)
  }

  public removeItem(name) {
    this.storage.remove(name);
  }
}
