import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () => import("./ui/ui.component").then((module) => module.UiComponent),
		canActivate: [AuthGuard],
	},
	{
		path: "auth",
		loadComponent: () => import("./ui/auth/auth.component").then((module) => module.AuthComponent),
		children: [
			{
				path: "",
				pathMatch: "full",
				redirectTo: "login",
			},
			{
				path: "login",
				loadComponent: () => import("./ui/auth/login/login.component").then((module) => module.LoginComponent),
			},
			{
				path: "register",
				loadComponent: () => import("./ui/auth/register/register.component").then((module) => module.RegisterComponent),
			},
		],
	},
];

// @NgModule({
// 	//imports: [RouterModule.forRoot(routes)],
// 	//exports: [RouterModule],
// })
// export class AppRoutingModule {}
