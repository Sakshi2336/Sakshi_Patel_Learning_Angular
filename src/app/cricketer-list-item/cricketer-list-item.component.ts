import {Component, Input} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgIf} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cricketer-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cricketer-list-item.component.html',
  styleUrl: './cricketer-list-item.component.css'
})
export class CricketerListItemComponent {
//This looks good
  @Input() cricketerData?: Cricketer;
}
