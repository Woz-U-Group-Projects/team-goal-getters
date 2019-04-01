import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../../follower.service';
import { Follower } from 'src/app/follower';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerList implements OnInit {
  
  followers: Follower[];

  getFollowers() {
    this.followerService.getFollower()
      .subscribe(f => (this.followers = f));
  }

  constructor(private followerService: FollowerService) { }
  
  ngOnInit() {
    this.getFollowers();
  }
}
