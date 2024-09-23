import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cricketer} from "./Shared/Modules/cricketer";
import {JsonPipe, NgForOf} from "@angular/common";
import {CricketerListComponent} from "./cricketer-list/cricketer-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CricketerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cricketer';


}
