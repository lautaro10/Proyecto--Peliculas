﻿// Libraries
import { Injectable } from "@angular/core";
import {
	ConnectionBackend,
	XHRBackend,
	RequestOptions,
	Request,
	RequestOptionsArgs,
	Response,
	Http,
	Headers
} from "@angular/http";
import { appConfig } from '../app.config';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomHttp extends Http {
	/**
	 * Create CustomHttp instance
	 */
	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	// Public methods
	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		if (!options) {
			return super.get(appConfig.apiUrl + url).catch(this.handleError);
		} else {
			return super.get(url).catch(this.handleError);
		}
	}

	post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return super.post(appConfig.apiUrl + url, body).catch(this.handleError);
	}

	put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return super.put(appConfig.apiUrl + url, body).catch(this.handleError);
	}

	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return super.delete(appConfig.apiUrl + url).catch(this.handleError);
	}

	// Private methods
	/**
	 * Handle errors
	 * @param error current errors
	 */
	private handleError(error: any) {
		if (error.status === 401) {
			// 401 unauthorized response so log user out of client
			window.location.href = '/login';
		}
		return Observable.throw(error._body);
	}
}

export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new CustomHttp(xhrBackend, requestOptions);
}

export let customHttpProvider = {
	provide: Http,
	useFactory: customHttpFactory,
	deps: [XHRBackend, RequestOptions]
};