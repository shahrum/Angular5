import { Injectable } from '@angular/core';
// this allows to sahre data between components
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
	/* This allows us to set the initial goal through goals as a BehaviorSubject,
		 and then define a goal property as an observable. */
	private goals = new BehaviorSubject<any>(['First life goals','Another silly life goal']);
	goal = this.goals.asObservable();

  constructor() { }

  // in order to update the goals property
  changeGoal(goal){
  	this.goals.next(goal);
  }

}
