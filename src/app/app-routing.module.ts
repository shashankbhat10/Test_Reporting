import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkitemComponent } from './workitem/workitem.component';
import { WorkitemDetailsComponent } from './workitem/workitem-details/workitem-details.component';

const routes: Routes = [
	// { path: '', redirectTo: '', pathMatch: 'full' },
	{ path: 'workitem', component: WorkitemComponent, children: [
		{ path: ':id', component: WorkitemDetailsComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { 
	
}
