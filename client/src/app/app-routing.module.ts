import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerSignupComponent } from './components/follower-signup/follower-signup.component';
import { InfluencerSignupComponent } from './components/influencer-signup/influencer-signup.component';
import { InfluencerLoginComponent } from './components/influencer-login/influencer-login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'influencer-signup', component: InfluencerSignupComponent },
  { path: 'influencer-login', component: InfluencerLoginComponent },
  //{ path: 'follower/:id', component: FollowerDetailComponent },
  { path: 'follower-signup', component: FollowerSignupComponent, data: { title: 'Followers List'}}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- For debugging use only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
