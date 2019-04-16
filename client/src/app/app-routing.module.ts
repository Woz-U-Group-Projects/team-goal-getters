import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerSignup } from './components/follower-signup/follower-signup.component';
import { InfluencerSignup } from './components/influencer-signup/influencer-signup.component';
import { InfluencerLogin } from './components/influencer-login/influencer-login.component';
import { InfluencerDashboard } from './components/influencer-dashboard/influencer-dashboard.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'signup', component: InfluencerSignup },
  { path: 'login', component: InfluencerLogin },
  { path: 'dashboard', component: InfluencerDashboard },
  { path: '', component: FollowerSignup }
  
  // { path: 'follower-signup', component: FollowerSignup, data: { title: 'Followers List'}}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- For debugging use only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
