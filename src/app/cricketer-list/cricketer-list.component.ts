import { Component } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgForOf} from "@angular/common";
import {CricketerListItemComponent} from "../cricketer-list-item/cricketer-list-item.component";

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [NgForOf,NgForOf,CricketerListItemComponent],
  templateUrl: './cricketer-list.component.html',
  styleUrl: './cricketer-list.component.css'
})
export class CricketerListComponent {

  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'country', 'isActive'];

  cricketersList: Cricketer[] = [
    {id: 1, firstName: 'Virat', lastName: 'Kohli', country: 'India', role: 'Batsman', isActive: true},
    {id: 2, firstName: 'Steve', lastName: 'Smith', country: 'Australia', role: 'Batsman', isActive: true},
    {id: 3, firstName: 'Rashid', lastName: 'Khan', country: 'Afghanistan', role: 'Bowler', isActive: true},
    {id: 4, firstName: 'Ben', lastName: 'Stokes', country: 'England', role: 'All-Rounder', isActive: true},
    {id: 5, firstName: 'Kane', lastName: 'Williamson', country: 'New Zealand', role: 'Batsman', isActive: false},
    {id: 6, firstName: 'AB', lastName: 'de Villiers', country: 'South Africa', role: 'Batsman', isActive: false}
  ]




  //function
  selectedCricketer?: Cricketer;
  
  selectPlayer(cric: Cricketer): void {
    this.selectedCricketer = cric;
  }
}
