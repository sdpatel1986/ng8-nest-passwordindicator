import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const indicator_url = "http://localhost:4200/api/indicator";

@Injectable()
export class PasswordService {

    constructor(public http: HttpClient ) { }

    checkPasswordStrength(password: string) {

        const data = {
            password: password
        };

        return this.http.post(indicator_url, data);
    }
}
