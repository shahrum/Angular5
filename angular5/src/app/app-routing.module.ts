import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		//the double empy cuot is for root!!
		path:'',
		component:HomeComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'about/:id',
		component:AboutComponent

	},
	{
		//double ** use for not founded links!!
		path:'**',
		component:PageNotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
