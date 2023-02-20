import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class HttpClientService {
	private apiUrl: string = environment.apiUrl;
	constructor(private httpClient: HttpClient) {}

	private url(requestParameter: Partial<RequestParameters>): string {
		return `${requestParameter.apiUrl ? requestParameter.apiUrl : this.apiUrl}/${requestParameter.controller}${
			requestParameter.action ? `/${requestParameter.action}` : ""
		}`;
	}

	get<Type>(requestParameter: Partial<RequestParameters>, id?: string): Observable<Type> {
		let url: string = "";

		if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
		else
			url = `${this.url(requestParameter)}${id ? `/${id}` : ""}${
				requestParameter.queryString ? `?${requestParameter.queryString}` : ""
			}`;

		return this.httpClient.get<Type>(url, {
			headers: requestParameter.headers,
			responseType: requestParameter.responseType as "json",
		});
	}

	post<Type , TypeResponse>(requestParameter: Partial<RequestParameters>, body: Partial<Type>): Observable<TypeResponse> {
		let url: string = "";
		if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
		else url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
		
		return this.httpClient.post<TypeResponse>(url, body, {
			headers: requestParameter.headers,
			responseType: requestParameter.responseType as "json",
		});
	}

	put<Type>(requestParameter: Partial<RequestParameters>, body: Partial<Type>): Observable<Type> {
		let url: string = "";
		if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
		else url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
		return this.httpClient.put<Type>(url, body, {
			headers: requestParameter.headers,
			responseType: requestParameter.responseType as "json",
		});
	}

	delete<Type>(requestParameter: Partial<RequestParameters>, id: string): Observable<Type> {
		let url: string = "";
		if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
		else
			url = `${this.url(requestParameter)}/${id}${
				requestParameter.queryString ? `?${requestParameter.queryString}` : ""
			}`;

		return this.httpClient.delete<Type>(url, {
			headers: requestParameter.headers,
			responseType: requestParameter.responseType as "json",
		});
	}
}

export class RequestParameters {
	controller?: string;
	action?: string;
	queryString?: string;

	headers?: HttpHeaders;
	apiUrl?: string;
	fullEndPoint?: string; //farklı servislere istek gönderecek kapasiteyi ekliyor

	responseType?: string = "json";
}
