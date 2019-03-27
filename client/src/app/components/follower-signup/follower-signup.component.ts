import { Component, OnInit } from '@angular/core';
import { Follower } from '../../follower';
import { FollowerService } from '../../follower.service';

@Component({
  selector: 'app-follower-signup',
  templateUrl: './follower-signup.component.html',
  styleUrls: ['./follower-signup.component.css']
})
export class FollowerSignupComponent implements OnInit {

usernames = ['Cgxix', 'Karthik', 'Ziiiro', 'Melissa'];
submitted = false;
newFollower: Follower = new Follower();

constructor(private followerService: FollowerService) { }

ngOnInit() {

}

addFollower() {
  this.followerService.addFollower(this.newFollower).subscribe(f => {
    this.newFollower = new Follower();
  });
}

}

