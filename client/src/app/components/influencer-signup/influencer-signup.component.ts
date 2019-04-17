import { Component, OnInit } from "@angular/core";
import { InfluencerService } from "../../influencer.service";
import { Influencer } from "../../influencer";
import { Router } from "@angular/router";

@Component({
  selector: "app-influencer-signup",
  templateUrl: "./influencer-signup.component.html",
  styleUrls: ["./influencer-signup.component.css"]
})
export class InfluencerSignup implements OnInit {
  // initialize an empty user object
  // we need to do this so the property binding works [(ngModel)]
  influencer: Influencer = new Influencer();

  constructor(private influencerService: InfluencerService, private router: Router) {}

  signUp(): void {
    this.influencerService.registerInfluencer(this.influencer).subscribe(() => {
      this.router.navigate(["/login"]);
    });
  }
  ngOnInit() {
  }
}