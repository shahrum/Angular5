import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
  		this.activatedRoute.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  sendMeHome(){
  	this.router.navigate(['']);
  }

}
