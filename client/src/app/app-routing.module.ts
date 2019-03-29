import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerListComponent } from './components/follower-list/follower-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: 'signup', component: SignupComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'follower/:id', component: FollowerDetailComponent },
  { path: 'followers', component: FollowerListComponent, data: { title: 'Followers List'}}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- For debugging use only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
