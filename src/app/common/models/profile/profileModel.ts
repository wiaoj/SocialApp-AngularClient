export interface ProfileResponseModel {
	profile: ProfileModel;
}
export interface ProfileModel {
    id:            string;
    followerCount: number;
    followCount:   number;
    followers:     Follow[];
    follows:       Follow[];
}

export interface Follow {
    id: string;
}
