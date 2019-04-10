import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerSignup } from './components/follower-signup/follower-signup.component';
import { InfluencerSignup } from './components/influencer-signup/influencer-signup.component';
import { InfluencerLoginComponent } from './components/influencer-login/influencer-login.component';
import { InfluencerDashboardComponent } from './components/influencer-dashboard/influencer-dashboard.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'influencer-signup', component: InfluencerSignup },
  { path: 'influencer-login', component: InfluencerLoginComponent },
  { path: 'influencer-dashboard', component: InfluencerDashboardComponent },
  //{ path: 'follower/:id', component: FollowerDetailComponent },
  { path: 'follower-signup', component: FollowerSignup, data: { title: 'Followers List'}}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- For debugging use only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
