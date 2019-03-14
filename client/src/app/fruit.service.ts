import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Fruit } from "./fruit";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FruitService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:5000/fruit/";

  getFruit(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.url);
  }

  addFruit(newFruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.url, newFruit);
  }
}
