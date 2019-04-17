import { Component, OnInit } from "@angular/core";
import { FollowerService } from "./follower.service";
import { InfluencerService } from "./influencer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private influencerService: InfluencerService) {}
  ngOninit() {
    this.influencerService.validateToken().subscribe(response => {
      console.log(response);
      this.influencerService.loggedIn = response;
    });
  }
}