import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/missionlist', pathMatch: 'full' },
  { path: 'missionlist', component: MissionlistComponent },
  { path: 'missiondetails', component: MissiondetailsComponent },
  { path: 'missiondetails/:flightNumber', component: MissiondetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
