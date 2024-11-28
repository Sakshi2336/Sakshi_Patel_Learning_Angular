import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Cricketer} from "./Shared/Modules/cricketer";
import {JsonPipe, NgForOf} from "@angular/common";
import {CricketerListComponent} from "./cricketer-list/cricketer-list.component";
import {CricketerListItemComponent} from "./cricketer-list-item/cricketer-list-item.component";
import {CricketPlayerService} from "./Services/cricket-player.service";
import {Observable} from "rxjs";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CricketerListComponent, CricketerListItemComponent, RouterLinkActive, RouterLink, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Cricketer List';
  isNumber = 1;
  cricketerById:Observable<Cricketer|undefined>;

  constructor(private cricketPlayerService : CricketPlayerService){

    this.cricketerById = this.cricketPlayerService.findStudentId(this.isNumber);

  };

}
