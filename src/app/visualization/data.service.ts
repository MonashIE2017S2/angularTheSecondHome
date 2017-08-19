import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IData } from './data.interface';

@Injectable()
export class DataService {
  private mockData: IData[] = [
    {label: 'Domestic and family violence', value: 2400},
    {label: 'Financial difficulties', value: 2000},
    {label: 'Itinerant', value: 100},
    {label: 'Housing crisis', value: 1600},
    {label: 'Lack support', value: 100},
    {label: 'Inappropriate dwellings', value: 1100},
    {label: 'Other relationship issues', value: 800},
    {label: 'Other accommodation issues', value: 500},
    {label: 'Health issues', value: 400},
    {label: 'Other', value: 800},
    {label: 'Custody transition', value: 200},
  ];

  private dataSubject = new BehaviorSubject<IData[]>(this.mockData);

  $data = this.dataSubject.asObservable();

  addData(newData: IData) {
    this.mockData.push(newData);
    this.dataSubject.next(this.mockData);
  }
}
