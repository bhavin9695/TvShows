import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Observable} from 'rxjs';
import {ShowDetailModal} from '../../modals/data.modal';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  scheduleList$: Observable<ShowDetailModal[]>;
  @Output() showClicked = new EventEmitter<ShowDetailModal>();

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.scheduleList$ = this.scheduleService.getScheduleList();
  }

  onClick(showDetail: ShowDetailModal) {
    this.showClicked.emit(showDetail);
  }


}
