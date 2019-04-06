import { Component, OnInit } from '@angular/core';
import { Influencer } from '../../influencer';
import { InfluencerService } from '../../influencer.service';

@Component({
  selector: 'app-influencer-login',
  templateUrl: './influencer-login.component.html',
  styleUrls: ['./influencer-login.component.css']
})
export class InfluencerLoginComponent implements OnInit {

  influencers: Influencer[];
newInfluencer: Influencer = new Influencer();
influencer: Influencer;

login() {
  this.influencerService.loginInfluencer(this.influencer).subscribe(influencer =>
    this.influencers.push(influencer));
}
constructor(private influencerService: InfluencerService) { }

  ngOnInit() {
  }

}
