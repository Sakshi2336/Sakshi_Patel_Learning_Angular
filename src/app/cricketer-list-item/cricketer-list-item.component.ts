import {Component, Input, OnInit} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgIf} from "@angular/common";
import {Observable} from "rxjs";
import { NgOptimizedImage } from '@angular/common'
import {ActivatedRoute, Router} from "@angular/router";
import {CricketPlayerService} from "../Services/cricket-player.service";

@Component({
  selector: 'app-cricketer-list-item',
  standalone: true,
  imports: [NgIf,NgOptimizedImage],
  templateUrl: './cricketer-list-item.component.html',
  styleUrl: './cricketer-list-item.component.css'
})
export class CricketerListItemComponent implements OnInit{
//This looks good
  @Input() cricketerData?: Cricketer;

  cricketer: Cricketer | undefined;
  cricketerList: Cricketer[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cricketPlayerService: CricketPlayerService,
    private router: Router
  ) {}
  //rewrite onInit to get the list of cricketers and the current cricketer
  ngOnInit(): void {
    this.cricketPlayerService.getCricketer().subscribe(cricketers => {
      this.cricketerList = cricketers;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.cricketerList.findIndex(cricketer => cricketer.id === id);
          this.cricketer = this.cricketerList[this.currentIndex];
        }
      });
    });
  }
}
