import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auto } from 'src/app/shared/models/auto';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AutoListService {
  private baseUrl = environment.apiUrl;

  // fake test data
  private autoList: Auto[] = [
    new Auto(
       1,
      'https://ireland.apollo.olxcdn.com:443/v1/files/f7cbqvav5z56-UA/image;s=644x461',
      'Audi Q7',
      'Продається а/м Audi Q7, голий кузов з документами. Кузова є різних кольорів',
      2015),
    new Auto(
        2,
       'https://ireland.apollo.olxcdn.com:443/v1/files/xzzoh7v6efv53-UA/image;s=644x461',
       'Audi A6 Prestige',
       // tslint:disable-next-line:max-line-length
       'Автомобіль в ідеальному стані, готовий до провірки на СТО. Проведені всі профілактичні роботи. Є можливість продажі автомобіля з ПДВ. Також доставляємо автомобілі з США, Європи, Канади під ключ. Більше 150 автомобілів в дорозі, приїжджайте, обирайте, будете задоволені покупкою! Терміни доставки Європа 1-2 тижні, США-Канада 1-3 місяці',
       2016),
    new Auto(
        3,
        'https://ireland.apollo.olxcdn.com:443/v1/files/gu5u6qb43lne1-UA/image;s=644x461',
        'Fiat Talento/Trafic/Vivaro',
        // tslint:disable-next-line:max-line-length
        'Автомобіль свіжопригнаний,в хорошому стані! 100% оригінальний пробіг,додаткових витрат не потребує.Пасажир 8+1(переобладнаний). За додатковою інформацією телефонуйте.',
        2018),
  ];

  constructor(private http: HttpClient) {}

  getAutoList(): Observable<Auto[]> {
    // real request
    // return this.http.get<Auto[]>(this.baseUrl + 'auto-list');

    // fake data
    return of(this.autoList.slice());
  }

  getAuto(id: number): Observable<Auto> {
    // real request
    // this.http.get<Auto>(this.baseUrl + 'auto' + id);

    // fake data
    const autoItem = this.autoList.find( it => it.id === +id);
    return of(autoItem);
  }
}
