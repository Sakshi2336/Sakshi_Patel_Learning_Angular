import { Injectable } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {cricketersList} from "../Shared/mockCricketer.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {

  //local copy of cricketer list
  private local_cricketerList:Cricketer[] = cricketersList;
  constructor() { }

  //this method will return the array from mock file
  getCricketer():Observable<Cricketer[]>{
    return of (cricketersList);
  }

  //Method 1 : accept the number as argument and give the item which ahs the same id
  // as number
  findStudentId(userEnterNumber : number) : Observable<Cricketer | undefined>{
    const cricketerId = this.local_cricketerList.find(cricketer => cricketer.id === userEnterNumber);
    return of(cricketerId);
  }

  //Add method
  addNewCricketer(newCricketer : Cricketer) : Observable<Cricketer[]>{
    this.local_cricketerList.push(newCricketer)
    return of(this.local_cricketerList);
  }


  //Update method
  updateCricketer(updatedCricketer : Cricketer) : Observable<Cricketer[]>{
    let index = this.local_cricketerList.findIndex(cric=>cric.id === updatedCricketer.id);
    if(index !== -1){
      this.local_cricketerList[index] = updatedCricketer;
    }

    return of(this.local_cricketerList);
  }


  //Delete Method
  deleteCricketer(deletedCricketer : number) : Observable<Cricketer>{
    this.local_cricketerList = this.local_cricketerList.filter(cric=>cric.id !== deletedCricketer);

    return of(this.local_cricketerList[deletedCricketer]);
  }

  //New method for assignment 6 which generate New id
  generateNewId():number{
    return this.local_cricketerList.length > 0 ? Math.max(...this.local_cricketerList.map(cricketer => cricketer.id)) + 1 : 1;
  }
}
