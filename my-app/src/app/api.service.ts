import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
    private headers = new HttpHeaders({
      'x-rapidapi-key': 'c30cb11d9cmsh1de10c5c1af659cp166860jsn1018cf7af179',
      'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
    });
  constructor(private http: HttpClient) { }

  getMovie(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers });

  }

}
