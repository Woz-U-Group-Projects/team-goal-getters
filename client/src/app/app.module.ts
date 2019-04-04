import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FollowerSignup } from './components/follower-signup/follower-signup.component';
import { FollowerList } from './components/follower-list/follower-list.component';
import { InfluencerSignup } from './components/influencer-signup/influencer-signup.component';
import { InfluencerLoginComponent } from './components/influencer-login/influencer-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, FollowerSignup, FollowerList, InfluencerSignup, InfluencerLoginComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}