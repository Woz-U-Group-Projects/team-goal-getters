import { Component, OnInit } from '@angular/core';
import { InfluencerService } from "../../influencer.service";
import { Influencer } from "../../influencer";

@Component({
  selector: 'app-influencer-dashboard',
  templateUrl: './influencer-dashboard.component.html',
  styleUrls: ['./influencer-dashboard.component.css']
})

export class InfluencerDashboard implements OnInit {
  influencer: Influencer = new Influencer();

  constructor(private influencerService: InfluencerService) {}

  ngOnInit() {
    // find the profile for the current user based on their token
    this.influencerService.getProfile().subscribe(influencer => (this.influencer = influencer));
  }
}
