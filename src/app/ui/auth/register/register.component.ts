import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { AuthService } from "src/app/services/models/auth/auth.service";
import { RegisterModel } from "src/app/common/models/auth/registerModel";
import { MatStepperModule } from "@angular/material/stepper";
import { Router, RouterModule } from "@angular/router";
import { RequestParametersCallBacks } from "src/app/services/common/requestParametersCallBacks";
import { SpinnerService } from "src/app/services/common/spinner-service/spinner.service";

@Component({
	selector: "app-register",
	standalone: true,
	imports: [
		CommonModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatStepperModule,
		RouterModule,
	],
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
	// email = new FormControl("", [Validators.required, Validators.email]);
	// password = new FormControl("", [Validators.required]);
	// username = new FormControl("", [Validators.required]);
	isPasswordHide = true;
	firstNameLastNameFormGroup = this.formBuilder.group({
		firstName: ["", Validators.required],
		lastName: ["", Validators.required],
	});
	emailPasswordFormGroup = this.formBuilder.group({
		email: ["", Validators.required, Validators.email],
		password: ["", Validators.required],
	});
	isLinear = false;

	constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private spinnerService: SpinnerService) {}

	getErrorMessage() {
		if (this.emailPasswordFormGroup.controls.email.hasError("required")) {
			return "Değer boş olamaz";
		}

		return this.emailPasswordFormGroup.controls.email.hasError("email") ? "Email formatı doğru değil, ornek@ornek.com" : "";
	}

	showPassword() {
		this.isPasswordHide = !this.isPasswordHide;
	}

	async sendRequest() {
		this.spinnerService.show()
		const registerModel: RegisterModel = {
			firstName: this.firstNameLastNameFormGroup.value.firstName!,
			lastName: this.firstNameLastNameFormGroup.value.lastName!,
			email: this.emailPasswordFormGroup.value.email!,
			password: this.emailPasswordFormGroup.value.password!,
		};
		await this.authService.register(
			registerModel,
			()=> {
				this.router.navigate(["/"])
				this.spinnerService.hide()
			},
		);
	}
}
