import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../../follower.service';
import { Follower } from '../../follower';

@Component({
  selector: 'app-follower-signup',
  templateUrl: './follower-signup.component.html',
  styleUrls: ['./follower-signup.component.css']
})
export class FollowerSignup implements OnInit {

// usernames = ['Favorite Influencer "Choose One"', 'Cgxix', 'Karthik', 'Ziiiro', 'Melissa', 'Jerquan'];
// submitted = false;
followers: Follower[];
newFollower: Follower = new Follower();

addFollower() {
  this.followerService.addFollower(this.newFollower).subscribe(f => {
    this.newFollower = new Follower();
  });
}

constructor(private followerService: FollowerService) { }

ngOnInit() {
  }
}

