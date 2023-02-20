export interface AuthResponseModel {
	token: Token;
	refreshToken: string;
}

interface Token {
	token: string;
	expiration: Date;
}
