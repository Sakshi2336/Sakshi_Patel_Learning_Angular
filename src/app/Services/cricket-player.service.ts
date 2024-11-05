import { Injectable } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {cricketersList} from "../Shared/mockCricketer.data";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {

  private apiUrl = 'api/cricketers'; //url to web api
  //local copy of cricketer list
  private local_cricketerList:Cricketer[] = cricketersList;
  constructor(private http:HttpClient) { }

  //CRUD operations using HTTP Requests
  //All operations we need are:
  // Get, post, put, delete
  //this method will return the array from mock file
  getCricketer():Observable<Cricketer[]>{
    return this.http.get<Cricketer[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  //Method 1 : accept the number as argument and give the item which ahs the same id
  // as number
  findStudentId(id : number) : Observable<Cricketer>{
    return this.http.get<Cricketer>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError)); //return a single student
  }

  //Add method
  addNewCricketer(newCricketer : Cricketer) : Observable<Cricketer>{
    newCricketer.id = this.generateNewId();
    return this.http.post<Cricketer>(this.apiUrl, newCricketer).pipe(catchError(this.handleError));
  }


  //Update method
  updateCricketer(updatedCricketer : Cricketer) : Observable<Cricketer|undefined>{
    const url = `${this.apiUrl}/${updatedCricketer.id}`;
    return this.http.put<Cricketer>(url, updatedCricketer).pipe(catchError(this.handleError));
  }


  //Delete Method
  deleteCricketer(id : number) : Observable<{ }>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  //New method for assignment 6 which generate New id
  generateNewId():number{
    console.log('generateNewId called');
    return this.local_cricketerList.length > 0 ? Math.max(...this.local_cricketerList.map(cricketer => cricketer.id)) + 1 : 1;

  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
