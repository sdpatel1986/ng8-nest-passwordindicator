import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:3000/";

@Injectable()
export class PasswordService {

    constructor(public http: HttpClient ) { }

    checkPasswordStrength(password: string) {

        const data = {
            password: password
        };

        return this.http.post(url, data);
    }
}
