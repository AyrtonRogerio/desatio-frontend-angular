import { PitchComponent } from './pitch/pitch.component';
import { StartupComponent } from './startup/startup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path : "startup", component: StartupComponent},
  {path : "pitch", component: PitchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
