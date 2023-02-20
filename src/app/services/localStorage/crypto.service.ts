import { Injectable } from "@angular/core";

declare var require: any;

@Injectable({
	providedIn: "root",
})
export class CryptoService {
	constructor() {}
  
  private get secretKey() : string {
    return "secret-key"
  }
  
	encrypto(value: string): string {
		var CryptoTS = require("crypto-ts");
		return CryptoTS.AES.encrypt(value, this.secretKey);
	}

	decrypto(value: string): string {
		var CryptoTS = require("crypto-ts");
		var bytes = CryptoTS.AES.decrypt(value, this.secretKey);
		var plainText = bytes.toString(CryptoTS.enc.Utf8);
		return plainText;
	}
}
