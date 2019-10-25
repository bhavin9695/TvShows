import {Component, Input, OnInit} from '@angular/core';
import {ShowDetailModal} from '../../modals/data.modal';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  constructor() {
  }

  @Input() showDetailObj: ShowDetailModal;

  ngOnInit() {
  }

}
