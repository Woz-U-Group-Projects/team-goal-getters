import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FollowerSignupComponent } from './components/follower-signup/follower-signup.component';
import { FollowerListComponent } from './components/follower-list/follower-list.component';
import { InfluencerSignupComponent } from './components/influencer-signup/influencer-signup.component';
import { InfluencerLoginComponent } from './components/influencer-login/influencer-login.component';



@NgModule({
  declarations: [AppComponent, FollowerSignupComponent, FollowerListComponent, InfluencerSignupComponent, InfluencerLoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}