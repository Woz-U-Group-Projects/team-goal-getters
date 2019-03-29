import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { catchError, map, tap } from "rxjs/operators";
import { Follower } from "./follower";
import { Observable, of } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FollowerService {
  
  private followersUrl = 'http://localhost:5000/api/follower';  // URL to web api
  
  constructor(
    private http: HttpClient) { }

  // Get followers from the server  
  getFollowers(): Observable<Follower[]> {
    return this.http.get<Follower[]>(this.followersUrl);
  }
  // Add followers
  addFollower(newFollower: Follower): Observable<Follower> {
    return this.http.post<Follower>(this.followersUrl, newFollower);
  }
}
