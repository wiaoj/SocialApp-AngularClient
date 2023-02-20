import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { AuthResponseModel } from "src/app/common/models/auth/authResponseModel";
import { LoginModel } from "src/app/common/models/auth/loginModel";
import { RegisterModel } from "src/app/common/models/auth/registerModel";
import { HttpClientService } from "src/app/services/common/http-client/http-client.service";
import { LocalStorageService } from "src/app/services/localStorage/local-storage.service";
import { RequestParametersCallBacks } from "../../common/requestParametersCallBacks";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private httpClientService: HttpClientService, private localStorageService: LocalStorageService) {}

	isAuthenticated() {
		return this.localStorageService.token ? true : false;
	}

	async register(registerModel: RegisterModel, successCallback?: () => void,
	errorCallback?: (error : any) => void) {
		const observable: Observable<AuthResponseModel> = this.httpClientService.post<RegisterModel, AuthResponseModel>(
			{
				controller: "Authentications",
				action: "Register",
			},
			registerModel
		);

		// const authResponseModel: AuthResponseModel = await firstValueFrom(observable);
		// this.localStorageService.SetToken = authResponseModel.token.token;
		firstValueFrom(observable)
			.then((response) => {
				successCallback;
				this.localStorageService.SetToken = response.token.token;
			})
			.catch((error) => errorCallback);
	}

	async login(loginModel: LoginModel, successCallback?: () => void,
	errorCallback?: (error : any) => void){
		const observable: Observable<AuthResponseModel> = this.httpClientService.post<RegisterModel, AuthResponseModel>(
			{
				controller: "Authentications",
				action: "Login",
			},
			loginModel
		);

		// const authResponseModel: AuthResponseModel = await firstValueFrom(observable);
		// this.localStorageService.SetToken = authResponseModel.token.token;
		firstValueFrom(observable)
			.then((response) => {
				successCallback;
				this.localStorageService.SetToken = response.token.token;
			})
			.catch((error) => errorCallback);
	}
}
