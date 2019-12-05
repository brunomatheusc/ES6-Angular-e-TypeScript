import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        // console.log()
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta: any) => {
            return resposta;
        });
    }
}