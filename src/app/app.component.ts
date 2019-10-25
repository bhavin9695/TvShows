import { Component } from '@angular/core';
import {ShowDetailModal} from './modals/data.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TvShows';

  selectedShow: ShowDetailModal;
}
