//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
import { routes } from "./app/app-routing.module";
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { JwtModule } from "@auth0/angular-jwt";
import { LocalStorageService } from "./app/services/localStorage/local-storage.service";
import { CryptoService } from "./app/services/localStorage/crypto.service";
const localStorageService : LocalStorageService = new LocalStorageService(new CryptoService());

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		importProvidersFrom(
			BrowserModule,
			BrowserAnimationsModule,
			NgxSpinnerModule.forRoot({ type: "square-jelly-box" }),
			HttpClientModule,
			JwtModule.forRoot({
				config: {
					tokenGetter: () => {
						const token = localStorageService.token
						return token;
					},
					allowedDomains: ["localhost:5078"],
				},
			}),
		),
		provideRouter(routes),
	],
});
