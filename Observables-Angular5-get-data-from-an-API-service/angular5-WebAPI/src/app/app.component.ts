import { Component,OnInit} from '@angular/core';
import { ApiService } from './services/api-service.service';
import { Iposts } from './interface/iposts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
