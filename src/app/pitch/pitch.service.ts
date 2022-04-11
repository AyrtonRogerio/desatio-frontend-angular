import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Pitch } from '../model/pitch';


@Injectable({
  providedIn: 'root'
})
export class PitchService {

  constructor(protected http: HttpClient) { }




  listaPitch(): Observable<Pitch[]>{
    return this.http.get<Pitch[]>(`${environment.API}/pitch`);
   }

   listaPitchsPersonalizado(local: string, serie_investimentos: string, funcionarios: number): Observable<Pitch[]> {
    let parametros = new HttpParams();
    let headersReq = new HttpHeaders();
    headersReq.append('Content-Type', 'application/json');

    parametros=parametros.append("serie_investimento", ("%"+serie_investimentos +"%"));
    parametros=parametros.append("local", ("%"+local+"%"));
    parametros=parametros.append("funcionarios", Number.parseInt(""+funcionarios));
    console.log(parametros.get("serie_investimento"))
    return this.http.get<Pitch[]>(`${environment.API}/pitch/buscar`, {
      headers:headersReq,
      params: parametros,

    })
  }


   salvarPitch(pitch: Pitch){
     return this.http.post(`${environment.API}/pitch`, pitch).pipe(take(1));

   }
}
