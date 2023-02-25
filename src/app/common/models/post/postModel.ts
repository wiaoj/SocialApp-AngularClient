export interface PostResponseModel {
	posts: PostModel[];
}
export interface PostModel {
	id: string;
	profileId: string;
	content: string;
}
