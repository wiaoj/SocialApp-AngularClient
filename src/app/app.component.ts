import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from "./services/common/spinner-service/spinner.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterModule, NgxSpinnerModule],
	template: `<router-outlet></router-outlet>
		<ngx-spinner
			bdColor="rgba(0, 0, 0, 0.8)"
			size="large"
			color="#ffffff"
			type="square-jelly-box"
			[fullScreen]="true"
		></ngx-spinner>`,
})
export class AppComponent implements OnInit {
	title = "SocialAppClient";
	constructor(private spinner: SpinnerService) {}

	ngOnInit() {
		this.spinner.show();

		setTimeout(() => {
			this.spinner.hide();
		}, 1000);
	}
}
