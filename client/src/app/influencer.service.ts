import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Influencer } from "./influencer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class InfluencerService {
  constructor(private http: HttpClient) {}

  // options allows us to flag that we are using credentials, which will allow the jtw cookie on all requests
  options = { withCredentials: true };

  // base url of the express backend
  url: string = "http://localhost:5000/api/influencers/";

  // boolean value to hold the login status
  loggedIn: boolean = false;

  // register an influencer, must .subscribe() to trigger
  // POST baseurl/signup
  registerInfluencer(influencer: Influencer): Observable<string> {
    return this.http.post<string>(this.url + "signup", influencer, this.options);
  }

  // login an influencer, must .subscribe() to trigger
  // POST baseurl/login
  loginInfluencer(influencer: Influencer): Observable<string> {
    return this.http.post<string>(this.url + "login", influencer, this.options);
  }

  // get an influencer profile, must .subscribe() to trigger
  // GET baseurl/u
  getProfile(): Observable<Influencer> {
    return this.http.get<Influencer>(this.url + "u", this.options);
  }

  // logout, must .subscribe() to trigger
  // GET baseurl/logout
  logout(): Observable<string> {
    return this.http.get<string>(this.url + "logout", this.options);
  }

  // validate a token, must .subscribe() to trigger
  // GET baseurl/validateToken
  validateToken(): Observable<boolean> {
    return this.http.get<boolean>(this.url + "validateToken", this.options);
  }
}