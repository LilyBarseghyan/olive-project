import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RulesEngineComponent } from './rules-engine/rules-engine.component';
import { LeaveTypesComponent } from './rules-engine/rules-name/leave-types/leave-types/leave-types.component';
import { TimeTrackingComponent } from './rules-engine/rules-name/time-tracking/time-tracking/time-tracking.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'rules-engine', component: RulesEngineComponent },

  { path: 'rules-engine/leave-types', component: LeaveTypesComponent },
  { path: 'rules-engine/time-tracking', component: TimeTrackingComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
