import { Component, OnInit } from "@angular/core";
import { FollowerService } from "./follower.service";
import { Follower } from "./follower";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  followers: Follower[];
  newFollower: Follower = new Follower();

  getFollower() {
    this.followerService.getFollower().subscribe(f => (this.followers = f));
  }

  addFollower() {
    this.followerService.addFollower(this.newFollower).subscribe(f => {
      this.newFollower = new Follower();
      this.getFollower();
    });
  }

  constructor(private followerService: FollowerService) {}
  ngOnInit() {
    this.getFollower();
  }
}
