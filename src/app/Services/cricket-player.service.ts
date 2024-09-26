import { Injectable } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {cricketersList} from "../Shared/mockCricketer.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {

  //local copy of cricketer list
  private cricketer:Cricketer[] = cricketersList;
  constructor() { }

  //this method will return the array from mock file
  getCricketer():Observable<Cricketer[]>{
    return of (cricketersList);
  }
}
