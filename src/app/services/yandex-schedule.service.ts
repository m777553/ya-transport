import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YandexScheduleService {
  private baseUrl = '/v3.0/';

  constructor(private _http: HttpClient) { }

  getSchedule(transportType: string, from: string, to: string, date: string) {
    return this._http.get(`${this.baseUrl}search/?apikey=<ea9ee51f-aa56-4e1a-909f-61fbce3cdd02>&format=json&from=${from}&to=${to}&lang=ru_RU&transport_types=${transportType}&date=${date}`);
  }
}
