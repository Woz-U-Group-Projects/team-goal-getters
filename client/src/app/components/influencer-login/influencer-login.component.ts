import { Component, OnInit } from '@angular/core';
import { Influencer } from '../../influencer';
import { InfluencerService } from '../../influencer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencer-login',
  templateUrl: './influencer-login.component.html',
  styleUrls: ['./influencer-login.component.css']
})
export class InfluencerLogin implements OnInit {

influencer: Influencer = new Influencer();

constructor(private influencerService: InfluencerService, private router: Router) {}

login(): void {
  this.influencerService.loginInfluencer(this.influencer).subscribe(
    () => {
      this.influencerService.getProfile().subscribe(() => {
        // set the user to logged in
        this.influencerService.loggedIn = true;
        // send to the profile page
        this.router.navigate(["/dashboard"]);
      });
    },
    err => {
      console.log("Unauthorized");
      console.log(err.status);
      console.log(err);
    }
  );
}

ngOnInit() {}

}
