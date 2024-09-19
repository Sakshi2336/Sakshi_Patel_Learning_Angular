import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cricketer} from "./Shared/Modules/cricketer";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cricketer';

  cricketersList: Cricketer[] = [
    {id: 1, firstName: 'Virat', lastName: 'Kohli', country: 'India', role: 'Batsman', isActive: true},
    {id: 2, firstName: 'Steve', lastName: 'Smith', country: 'Australia', role: 'Batsman', isActive: true},
    {id: 3, firstName: 'Rashid', lastName: 'Khan', country: 'Afghanistan', role: 'Bowler', isActive: true},
    {id: 4, firstName: 'Ben', lastName: 'Stokes', country: 'England', role: 'All-Rounder', isActive: true},
    {id: 5, firstName: 'Kane', lastName: 'Williamson', country: 'New Zealand', role: 'Batsman', isActive: false},
    {id: 6, firstName: 'AB', lastName: 'de Villiers', country: 'South Africa', role: 'Batsman', isActive: false}
  ]

  //Function that gets called from our onclick. Takes in an
  //arguement ofa variable called user, which is type User and returns void
  toggleAdminStatus(user: Cricketer): void {
    user.isActive = !user.isActive;
  }
}
