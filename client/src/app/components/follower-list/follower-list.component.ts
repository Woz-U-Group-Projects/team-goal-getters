import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../../follower.service';
import { Follower } from 'src/app/follower';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  followers: Follower[] = [];

  constructor(private followerService: FollowerService) { }

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers(): void {
    this.followerService.getFollowers()
      .subscribe(followers => this.followers = followers);
  }
}
