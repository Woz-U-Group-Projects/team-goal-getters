import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Influencer } from './influencer';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
 };

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {
  constructor(private http: HttpClient) {}

  url: 'http://localhost:5000/api/influencers';

  getInfluencers(): Observable<Influencer[]> {
    return this.http.get<Influencer[]>(this.url);
  }

  addInfluencer(newInfluencer: Influencer): Observable<Influencer> {
    return this.http.post<Influencer>(this.url, newInfluencer);
  }

  /** POST: add a new hero to the database */
loginInfluencer(influencer: Influencer): Observable<Influencer> {
  return this.http.post<Influencer>(this.url, influencer, httpOptions);
 }

}
