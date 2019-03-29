import { Component, OnInit } from '@angular/core';
import { Follower } from '../../follower';
import { FollowerService } from '../../follower.service';

@Component({
  selector: 'app-follower-form',
  templateUrl: './follower-form.component.html',
  styleUrls: ['./follower-form.component.css']
})
export class FollowerFormComponent implements OnInit {

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

