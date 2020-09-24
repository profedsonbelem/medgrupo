import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const URL = 'http://localhost:4006/aluno';

@Injectable()
export class MailService {
    constructor(private http: HttpClient) {
    }
    public envioEmail(email: any, lista:any[]){
        console.log('lista: ', lista)
        return this.http.post<any>(`${URL}`,{email:email,lista: lista});
    }
}