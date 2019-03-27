import { Component, OnInit } from "@angular/core";
import { FollowerService } from "./follower.service";
import { Follower } from "./follower";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'Welcome to CRMM.ME';
}