import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/app/influencer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private influencerService: InfluencerService, private router: Router) { }
  
  logout() {
    this.influencerService.logout().subscribe(response => {
      this.influencerService.loggedIn = false;
      console.log("logging out");
      this.router.navigate(["/"]);
    });
    return false;
  }
  
  ngOnInit() {
  }

}
