import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProfileService } from "src/app/services/models/profile/profile.service";

@Component({
	selector: "app-profile",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
	constructor(private profileService: ProfileService) {}

	async ngOnInit(): Promise<void> {
		console.log(this.profileService.getProfile());
	}
}