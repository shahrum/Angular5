import { Component,OnInit} from '@angular/core';
import { ApiService } from './services/api-service.service';
import { Iposts } from './interface/iposts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ApiService]
})
export class AppComponent implements OnInit {
  
  _postsArray:Iposts[];
  
  constructor(private apiService:ApiService){}

  /*
     Because we’re making use of Observables, we need to subscribe to
     the apiService’s getPosts method (which is of type Observable) in order to
     tell the Angular eco-system that it should execute that method and in 
     turn make the HTTP GET call. If you don’t subscribe to the Observable 
     it won’t be executed. We then map the returned data (resultArray) to
     our _postsArray variable.
   */
  getPosts():void{
    this.apiService.getPosts().subscribe(
      resultArray => this._postsArray = resultArray,
      error => console.log("ERROR :: " + error)
    )
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
