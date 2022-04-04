import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Pitch } from './pitch.component';

@Injectable({
  providedIn: 'root'
})
export class PitchService {

  constructor(protected http: HttpClient) { }




  listaPitch(): Observable<any>{
    return this.http.get(`${environment.API}/pitch`).pipe(take(1));
   }




   salvarPitch(pitch: Pitch){
     return this.http.post(`${environment.API}/pitch`, pitch).pipe(take(1));

   }
}
