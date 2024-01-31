import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YandexScheduleService {
  private baseUrl = 'https://api.rasp.yandex.net/v3.0/';

  constructor(private _http: HttpClient) { }

  getSchedule(transportType: string, from: string, to: string, date: string) {
    return this._http.get(`${this.baseUrl}search/?apikey=<api-key>&format=json&from=${from}&to=${to}&lang=ru_RU&transport_types=${transportType}&date=${date}`);
  }
}
