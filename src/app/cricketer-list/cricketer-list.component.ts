import {Component, OnInit} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {CricketerListItemComponent} from "../cricketer-list-item/cricketer-list-item.component";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {cricketersList} from "../Shared/mockCricketer.data";
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [NgForOf, NgForOf, CricketerListItemComponent, NgIf, NgOptimizedImage, RouterLink],
  templateUrl: './cricketer-list.component.html',
  styleUrl: './cricketer-list.component.css'
})
export class CricketerListComponent implements OnInit{

  //I still want a local copy of the cricketer list
  cricketerList:Cricketer[] = [];

  //calling our service
  constructor(private cricketPlayerService : CricketPlayerService) {
  }

  ngOnInit() {
    //this life cycle hook is a good place to fetch init our data
    this.cricketPlayerService.getCricketer().subscribe({
      next:(data:Cricketer[]) => this.cricketerList = data, //data is just variable name here
      error:err=>console.error("Error fetching cricketer:",err),
      complete:() => console.log("Cricketer data fetch complete successfully!")
    })

  }

  //Not Needed Code Below. You can remove it - Matt
  //function
  selectedCricketer?: Cricketer;
  selectPlayer(cric: Cricketer): void {
    this.selectedCricketer = cric;
  }



}
