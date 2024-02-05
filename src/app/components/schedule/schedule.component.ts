import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YandexScheduleService } from '../../services/yandex-schedule.service';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { Schedule } from './schedule.model';
import { scheduleMock } from './schedule.mock';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  scheduleForm!: FormGroup;
  schedule!: Schedule;
  private destroy$ = new Subject<void>();

  constructor(private _yandexScheduleService: YandexScheduleService) { }

  ngOnInit() {
    this.scheduleForm = new FormGroup({
        'transportType': new FormControl('', Validators.required),
        'from': new FormControl('', Validators.required),
        'to': new FormControl('', Validators.required),
        'date': new FormControl('', Validators.required)
    });
  }

  getSchedule() {
    const formValues = this.scheduleForm.value;
    this._yandexScheduleService.getSchedule(formValues.transportType, formValues.from, formValues.to, formValues.date)
      .pipe(takeUntil(this.destroy$),
        catchError(()=> of(scheduleMock)))
      .subscribe(schedule => this.schedule = schedule);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
