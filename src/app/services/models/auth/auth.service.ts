import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { firstValueFrom, Observable } from "rxjs";
import { AuthResponseModel } from "src/app/common/models/auth/authResponseModel";
import { LoginModel } from "src/app/common/models/auth/loginModel";
import { RegisterModel } from "src/app/common/models/auth/registerModel";
import { HttpClientService } from "src/app/services/common/http-client/http-client.service";
import { LocalStorageService } from "src/app/services/localStorage/local-storage.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(
		private httpClientService: HttpClientService,
		private jwtHelperService: JwtHelperService,
		private localStorageService: LocalStorageService
	) {}

	public isAuthenticated() {
		const token: string | null = this.localStorageService.token;

		if (!token || this.jwtHelperService.isTokenExpired(token)) return false;
		return true;
	}

	private newMethod(
		observable: Observable<AuthResponseModel>,
		successCallback: (() => void) | undefined,
		errorCallback: ((error: any) => void) | undefined
	) {
		firstValueFrom(observable)
			.then((response) => {
				this.localStorageService.SetToken = response.token.token;
				successCallback;
			})
			.catch((error) => errorCallback);
	}

	async register(registerModel: RegisterModel, successCallback?: () => void, errorCallback?: (error: any) => void) {
		const observable: Observable<AuthResponseModel> = this.httpClientService.post<RegisterModel, AuthResponseModel>(
			{
				controller: "Authentications",
				action: "Register",
			},
			registerModel
		);

		// const authResponseModel: AuthResponseModel = await firstValueFrom(observable);
		// this.localStorageService.SetToken = authResponseModel.token.token;
		this.newMethod(observable, successCallback, errorCallback);
	}

	async login(loginModel: LoginModel, successCallback?: () => void, errorCallback?: (error: any) => void) {
		const observable: Observable<AuthResponseModel> = this.httpClientService.post<RegisterModel, AuthResponseModel>(
			{
				controller: "Authentications",
				action: "Login",
			},
			loginModel
		);

		// const authResponseModel: AuthResponseModel = await firstValueFrom(observable);
		// this.localStorageService.SetToken = authResponseModel.token.token;
		this.newMethod(observable, successCallback, errorCallback);
	}
}
