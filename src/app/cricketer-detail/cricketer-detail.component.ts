import {Component, Input} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cricketer-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cricketer-detail.component.html',
  styleUrl: './cricketer-detail.component.css'
})
export class CricketerDetailComponent {

  @Input() cricketer?: Cricketer;
}
