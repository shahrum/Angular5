import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Iposts } from '../interface/iposts';

@Injectable()
export class ApiService {
  private _postsUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http:Http) { 

  }

  getPosts():Observable<Iposts>{
    return this.http
               .get(this._postsUrl)
               .map((res:Response)=>{
                 return <Iposts>res.json();
               })
               .catch(this.handleError);
  }
  
  private handleError(error:Response){
    return Observable.throw(error.status);
  }


}
