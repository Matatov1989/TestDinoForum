import { Injectable } from '@angular/core';
//import { Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SimpleService {

  //  public source = new Subject<string>();

  private source = new BehaviorSubject('error');
  userName = this.source.asObservable();

  constructor() { }

  //save a user name
  saveName(name: string) {
    console.log('service save name = ', name);
    this.source.next(name)
  }
}
