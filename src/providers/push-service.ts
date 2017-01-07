import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';

/*
  Generated class for the PushService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PushService {

    readonly API_URL: string = 'http://tom-push-server.azurewebsites.net/api/Register/';
    constructor(public http: Http) {
    }

    CreateRegistrationId(deviceId: string): Observable<string> {
        let device = {
            Handle: deviceId
        };

        return this.http.post(this.API_URL, device).map((data: Response) => {
            return <string>data.json();
        }).catch(this.handleError);
    }

    UpdateRegistration(deviceId: string, pushHubId: string): Observable<Response> {
        let body = {
            Platform: 'gcm',
            Handle: deviceId,
            Tags: ['male','taichung']
        };
        return this.http.put(this.API_URL + pushHubId, body).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
