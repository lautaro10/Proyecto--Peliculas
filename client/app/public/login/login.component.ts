import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from "angular2-social-login";
import { AuthenticationService, UserService } from './../../_services/index';
import { User } from '../../_models/index';
import { ToastrService } from 'ngx-toastr';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	loading = false;
	loginForm: FormGroup;
	registerForm: FormGroup;

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
		private toastr: ToastrService,
		private _auth: AuthService,
		private fb: FormBuilder,
		private userService: UserService,
		) {}

	ngOnInit() {
		this.createForm();
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.loginForm.get('name').value, this.loginForm.get('password').value)
			.subscribe(
				data => {
					this.router.navigate(['/usuarios']);
					this.toastr.success('Logueado correctamente');
				},
				error => {
					this.toastr.error('Credenciales incorrectas');
					this.loading = false;
				}
			);
	}

	loginWithFacebook(): void {
		this._auth.login('facebook').subscribe(
			(data: any) => {
				this.router.navigate(['/peliculas']);
			}
		)
	}

	register() {
		this.loading = true;
		let user: User = {
			username: this.registerForm.get('userNameRegister').value,
			password: this.registerForm.get('passwordRegister').value,
			firstName: this.registerForm.get('firstNameRegister').value,
			lastName: this.registerForm.get('lastNameRegister').value,
		}
		this.userService.create(user)
		.subscribe(
			data => {
				this.toastr.success('Registro exitoso!');
			},
			error => {
				this.toastr.error('Usuario ya existente');
					this.loading = false;
			}
		);
	}

	private createForm() {
		this.loginForm = this.fb.group({ // <-- the parent FormGroup
			name: ['', Validators.required ],
			password: ['', Validators.required ]
		});

		this.registerForm = this.fb.group({ // <-- the parent FormGroup
			firstNameRegister: ['', Validators.required ],
			lastNameRegister: ['', Validators.required ],
			userNameRegister: ['', Validators.required ],
			passwordRegister: ['', Validators.required ]
		});
	}
}
