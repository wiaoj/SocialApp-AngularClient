import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "src/app/services/models/auth/auth.service";
import { LoginModel } from "src/app/common/models/auth/loginModel";
@Component({
	selector: "app-login",
	standalone: true,
	imports: [
		CommonModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		RouterModule,
	],
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	email = new FormControl("", [Validators.required, Validators.email]);
	password = new FormControl("", [Validators.required]);
	isPasswordHide = true;

	constructor(private authService: AuthService) {}

	getErrorMessage() {
		if (this.email.hasError("required")) {
			return "Değer boş olamaz";
		}

		return this.email.hasError("email") ? "Email formatı doğru değil, ornek@ornek.com" : "";
	}

	showPassword() {
		this.isPasswordHide = !this.isPasswordHide;
	}

	async login() {
		const loginModel: LoginModel = {
			email: this.email.value!,
			password: this.password.value!,
		};

		await this.authService.login(loginModel);
	}
}
