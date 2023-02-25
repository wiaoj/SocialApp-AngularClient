//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
import { routes } from "./app/app-routing.module";
import { importProvidersFrom } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { JwtModule } from "@auth0/angular-jwt";

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		importProvidersFrom(
			BrowserModule,
			BrowserAnimationsModule,
			NgxSpinnerModule.forRoot({ type: "square-jelly-box" }),
			JwtModule.forRoot({
				config: {
					allowedDomains: ["example.com"],
				},
			}),
		),
		provideRouter(routes),
	],
});
