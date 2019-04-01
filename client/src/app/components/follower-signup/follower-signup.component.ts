import { Component, OnInit } from '@angular/core';
import { Follower } from '../../follower';
import { FollowerService } from '../../follower.service';

@Component({
  selector: 'app-follower-signup',
  templateUrl: './follower-signup.component.html',
  styleUrls: ['./follower-signup.component.css']
})
export class FollowerSignup implements OnInit {

// usernames = ['Favorite Influencer "Choose One"', 'Cgxix', 'Karthik', 'Ziiiro', 'Melissa', 'Jerquan'];
// submitted = false;
newFollower: Follower = new Follower();
followers: Follower[];

constructor(private followerService: FollowerService) { }

addFollower() {
  this.followerService.addFollower(this.newFollower).subscribe(f => {
    this.newFollower = new Follower();
  });
}

ngOnInit() {
  }
}

