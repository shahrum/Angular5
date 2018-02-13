import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	itemCount : number;
	btnText : string = "Add An Item";
	goalText : string = "My first life goal";
	goals = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(){
  	//add items to goals array
  	this.goals.push(this.goalText);

  	//clear the goalText field
  	this.goalText="";
  	
  	//read the goals array lenth and assign it itemCount
  	this.itemCount=this.goals.length;
  }

}
