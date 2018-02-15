import { Component, OnInit } from '@angular/core';
import{ trigger,style,keyframes,query,stagger,transition,animate } from '@angular/animations';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
  	//animation goes here :D
  	trigger("goals",[
  			transition('* => *',[
  					query(':enter',style({opacity:0}),{optional:true}),
  					query(':enter',stagger('300ms',[
  							animate('0.6s ease-in',keyframes([
  									style({opacity:0,transform:'translateY(-75%)',offset:0}),
  									style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
  									style({opacity:1,transform:'translateY(0)',offset:1}),

  								]))
  						]),{optional:true}),
            query(':leave',stagger('300ms',[
                animate('0.6s ease-in',keyframes([
                    style({opacity:1,transform:'translateY(0)',offset:0}),
                    style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
                    style({opacity:0,transform:'translateY(-75%)',offset:1}),

                  ]))
              ]),{optional:true})
  				])
  		])
  ]
})
export class HomeComponent implements OnInit {
	itemCount : number;
	btnText : string = "Add An Item";
	goalText : string = "My first life goal";
	goals = [];

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

  addItem(){
  	//add items to goals array
  	this.goals.push(this.goalText);

  	//clear the goalText field
  	this.goalText="";

  	//read the goals array lenth and assign it itemCount
  	this.itemCount=this.goals.length;

    this.data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.data.changeGoal(this.goals);
    this.itemCount=this.goals.length;
  }

}
