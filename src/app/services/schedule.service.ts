import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ShowDetailModal} from '../modals/data.modal';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private apiService: ApiService,
              private datePipe: DatePipe) {
  }

  getScheduleList(): Observable<ShowDetailModal[]> {
    const currentDate = new Date();
    const currentDateString = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    return this.apiService.get(`https://api.tvmaze.com/schedule?country=US&date=${currentDateString}`).pipe(
      map((response: ShowDetailModal[]) => {
        return response;
      })
    );
  }

}
