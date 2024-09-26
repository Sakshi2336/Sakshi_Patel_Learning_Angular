import { Component } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {CricketerListItemComponent} from "../cricketer-list-item/cricketer-list-item.component";
import {CricketPlayerService} from "../Services/cricket-player.service";

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [NgForOf, NgForOf, CricketerListItemComponent, NgIf, NgStyle, NgClass],
  templateUrl: './cricketer-list.component.html',
  styleUrl: './cricketer-list.component.css'
})
export class CricketerListComponent {

  //I still want a local copy of the cricketer list
  cricketerList:Cricketer[] = [];

  //calling our service
  constructor(private cricketPlayerService : CricketPlayerService) {
  }

//Not Needed Code Below. You can remove it - Matt
  //function
  selectedCricketer?: Cricketer;

  selectPlayer(cric: Cricketer): void {
    this.selectedCricketer = cric;
  }
}
