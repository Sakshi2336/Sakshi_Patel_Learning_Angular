import { Component } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {CricketerListItemComponent} from "../cricketer-list-item/cricketer-list-item.component";

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [NgForOf, NgForOf, CricketerListItemComponent, NgIf, NgStyle, NgClass],
  templateUrl: './cricketer-list.component.html',
  styleUrl: './cricketer-list.component.css'
})
export class CricketerListComponent {

//Not Needed Code Below. You can remove it - Matt
  //function
  selectedCricketer?: Cricketer;

  selectPlayer(cric: Cricketer): void {
    this.selectedCricketer = cric;
  }
}
