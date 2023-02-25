import { Injectable } from "@angular/core";
import { Observable, firstValueFrom } from "rxjs";
import { PostModel } from "src/app/common/models/post/postModel";
import { HttpClientService } from "../../common/http-client/http-client.service";

@Injectable({
	providedIn: "root",
})
export class PostService {
	constructor(private httpClientService: HttpClientService) {}

	async getPostsByProfileId(profileId: string) {
		const observable: Observable<PostModel> = this.httpClientService.get<PostModel>(
			{
				controller: "Posts",
				action: "GetPostsByProfileId",
			},
			profileId
		);

		// const authResponseModel: AuthResponseModel = await firstValueFrom(observable);
		// firstValueFrom(observable)
		// 		.then((response) => {
		// 			successCallback;
		// 		})
		// 		.catch((error) => errorCallback);
		return await firstValueFrom(observable);
	}
}
