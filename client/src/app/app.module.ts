import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FollowerFormComponent } from './components/follower-form/follower-form.component';
import { FollowerListComponent } from './components/follower-list/follower-list.component';

@NgModule({
  declarations: [AppComponent, FollowerFormComponent, FollowerListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}