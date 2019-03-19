import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Follower } from "./follower";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FollowerService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:4200/follower/";

  getFollower(): Observable<Follower[]> {
    return this.http.get<Follower[]>(this.url);
  }

  addFollower(newFollower: Follower): Observable<Follower> {
    return this.http.post<Follower>(this.url, newFollower);
  }
}
