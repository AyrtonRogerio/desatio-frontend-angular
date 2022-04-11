import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Startup } from '../model/startup';


@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(protected http: HttpClient) { }




  listaStartup(): Observable<any>{
    return this.http.get(`${environment.API}/startup`).pipe(take(1));
   }




   salvarStartup(startup: Startup){
     return this.http.post(`${environment.API}/startup`, startup).pipe(take(1));

   }
}
