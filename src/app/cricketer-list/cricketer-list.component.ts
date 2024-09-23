import { Component } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgForOf} from "@angular/common";
import {CricketerDetailComponent} from "../cricketer-detail/cricketer-detail.component";

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [NgForOf,NgForOf,CricketerDetailComponent],
  templateUrl: './cricketer-list.component.html',
  styleUrl: './cricketer-list.component.css'
})
export class CricketerListComponent {

  cricketersList: Cricketer[] = [
    {id: 1, firstName: 'Virat', lastName: 'Kohli', country: 'India', role: 'Batsman', isActive: true},
    {id: 2, firstName: 'Steve', lastName: 'Smith', country: 'Australia', role: 'Batsman', isActive: true},
    {id: 3, firstName: 'Rashid', lastName: 'Khan', country: 'Afghanistan', role: 'Bowler', isActive: true},
    {id: 4, firstName: 'Ben', lastName: 'Stokes', country: 'England', role: 'All-Rounder', isActive: true},
    {id: 5, firstName: 'Kane', lastName: 'Williamson', country: 'New Zealand', role: 'Batsman', isActive: false},
    {id: 6, firstName: 'AB', lastName: 'de Villiers', country: 'South Africa', role: 'Batsman', isActive: false}
  ]

  //function
  selectedCrickter?: Cricketer;


  //Function that gets called from our onclick. Takes in an
  //argument of a variable called user, which is type User and returns void
  selectCrickter(cricketer: Cricketer): void {
    cricketer.isActive = !cricketer.isActive;
  }
}