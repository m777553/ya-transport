import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { YandexScheduleService } from '../../services/yandex-schedule.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  scheduleForm!: FormGroup;
  schedule: any;
  private destroy$ = new Subject<void>();

  constructor(private _yandexScheduleService: YandexScheduleService) { }

  ngOnInit() {
    this.scheduleForm = new FormGroup({
      'transportType': new FormControl(''),
      'from': new FormControl(''),
      'to': new FormControl(''),
      'date': new FormControl('')
    });
  }

  getSchedule() {
    const formValues = this.scheduleForm.value;
    this._yandexScheduleService.getSchedule(formValues.transportType, formValues.from, formValues.to, formValues.date)
      .pipe(takeUntil(this.destroy$))
      .subscribe(schedule => this.schedule = schedule);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
