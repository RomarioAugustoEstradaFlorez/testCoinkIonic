import { Injectable } from '@angular/core'
import TripleDes from 'crypto-js/tripledes'
import EncUtf8 from 'crypto-js/enc-utf8'
import EncHex from 'crypto-js/enc-hex'
import Md5 from 'crypto-js/md5'
import ModeEcb from 'crypto-js/mode-ecb'
import PadPkcs7 from 'crypto-js/pad-pkcs7'
import EncBase64 from 'crypto-js/enc-base64'

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

  encrypt(serialized_json: string, key: string) {
    const encryptedArray = EncUtf8.parse(serialized_json);
    const keyHash = this.getKeyHash(key);
    const payload = TripleDes.encrypt(encryptedArray, keyHash, { mode: ModeEcb, padding: PadPkcs7 });
    return payload.ciphertext.toString(EncBase64);
  }

  decrypt(payload: string, key: string) {
    const encryptedArray = EncBase64.parse(payload);
    const keyHash = this.getKeyHash(key);
    const serialized_json = TripleDes.decrypt({ ciphertext: encryptedArray }, { mode: ModeEcb, padding: PadPkcs7 });
    return serialized_json.toString(EncUtf8);
  }

  getKeyHash(key: String) {
    let securityKeyArray = Md5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);
    return EncHex.parse(securityKeyArray);
  }

}
