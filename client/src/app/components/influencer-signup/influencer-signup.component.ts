import { Component, OnInit } from "@angular/core";
import { InfluencerService } from "../../influencer.service";
import { Influencer } from "../../influencer";

@Component({
  selector: "app-influencer-signup",
  templateUrl: "./influencer-signup.component.html",
  styleUrls: ["./influencer-signup.component.css"]
})
export class InfluencerSignup implements OnInit {
  influencers: Influencer[];
  newInfluencer: Influencer = new Influencer();

  addInfluencer() {
    this.influencerService.addInfluencer(this.newInfluencer).subscribe(i => {
      this.newInfluencer = new Influencer();
    });
  }

  constructor(private influencerService: InfluencerService) {}
  ngOnInit() {
  }
}