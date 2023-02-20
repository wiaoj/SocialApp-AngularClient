import { Injectable } from "@angular/core";
import { CryptoService } from "./crypto.service";

@Injectable({
	providedIn: "root",
})
export class LocalStorageService {
	constructor(private cryptoService: CryptoService) {}
	private get tokenName(): string {
		return "token";
	}
	
	private add(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	private delete(key: string) {
		localStorage.removeItem(key);
	}

	private get(key: string) {
		return localStorage.getItem(key);
	}

	public get token(): string | null {
		const token: string | null = this.get(this.tokenName);

		if (!token) return null;

		return this.cryptoService.decrypto(token);
	}

	public set SetToken(value: string) {
		const encryptedToken = this.cryptoService.encrypto(value);
		this.add(this.tokenName, encryptedToken);
	}
}
