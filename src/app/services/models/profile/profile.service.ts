import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { ProfileIdModel } from "src/app/common/models/profile/profileIdModel";
import { ProfileResponseModel } from "src/app/common/models/profile/profileModel";
import { HttpClientService } from "../../common/http-client/http-client.service";

@Injectable({
	providedIn: "root",
})
export class ProfileService {
	constructor(private httpClientService: HttpClientService) {}

	async getProfileIdByUserId(userId: string) {
		const observable = this.httpClientService.get<ProfileIdModel>(
			{
				controller: "Profiles",
				action: "GetProfileIdByUserId",
			},
			userId
		);

		return await firstValueFrom(observable);
	}

	async getProfile() {
		const observable = this.httpClientService.get<ProfileResponseModel>(
			{
				controller: "Profiles",
				action: "GetProfile",
			},
			
		);
console.log(await firstValueFrom(observable));

		return await firstValueFrom(observable);
	}
}
