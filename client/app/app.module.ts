import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { customHttpProvider } from './_helpers/index';
import { AuthGuard, AuthGuardSocialLogin } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { MovieService } from './_services/movie.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { LoggedService } from './_services/logged.service';

let providers = {
	'facebook': {
		'clientId': '1286133531481076',
		'apiVersion': 'v2.4' 
	}
};

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		PublicModule,
		AdminModule,
		Angular2SocialLoginModule,
		ReactiveFormsModule,
		ToastrModule.forRoot(),
		BrowserAnimationsModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		customHttpProvider,
		AuthGuard,
		AuthGuardSocialLogin,
		ToastrService,
		AuthenticationService,
		UserService,
		MovieService,
		LoggedService,
		{ provide: LOCALE_ID, useValue: "es" }
	],
	bootstrap: [AppComponent]
})

export class AppModule {
	constructor() {
		Angular2SocialLoginModule.loadProvidersScripts(providers);
	}
}
