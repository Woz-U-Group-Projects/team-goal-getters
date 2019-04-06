import { Component, OnInit } from '@angular/core';
import { Influencer } from '../../influencer';

@Component({
  selector: 'app-influencer-login',
  templateUrl: './influencer-login.component.html',
  styleUrls: ['./influencer-login.component.css']
})
export class InfluencerLoginComponent implements OnInit {

  influencers: Influencer[];
newInfluencer: Influencer = new Influencer();

login() {

}
  constructor() { }

  ngOnInit() {
  }

}
