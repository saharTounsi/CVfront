import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTeamComponent } from './employee-team.component';

const routes: Routes = [
  { path: '', component: EmployeeTeamComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamEmployeeRoutingModule { }
