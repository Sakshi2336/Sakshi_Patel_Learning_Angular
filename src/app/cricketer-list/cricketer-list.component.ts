import {Component, OnInit} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgForOf, NgIf} from "@angular/common";
import {CricketerListItemComponent} from "../cricketer-list-item/cricketer-list-item.component";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-cricketer-list',
  standalone: true,
  imports: [NgForOf, NgForOf, CricketerListItemComponent, NgIf, RouterLink],
  templateUrl: './cricketer-list.component.html',
  styleUrl: './cricketer-list.component.css'
})
export class CricketerListComponent implements OnInit{

  //I still want a local copy of the cricketer list
  cricketerList:Cricketer[] = [];

  //calling our service
  constructor(private cricketPlayerService : CricketPlayerService,
              private route: ActivatedRoute,
              private router :Router) {

  }

  ngOnInit() {
    //this life cycle hook is a good place to fetch init our data
    this.cricketPlayerService.getCricketer().subscribe({
      next:(data:Cricketer[]) => this.cricketerList = data, //data is just variable name here
      error:err=>console.error("Error fetching cricketer:",err),
      complete:() => console.log("Cricketer data fetch complete successfully!")
    })

  }

  deleteCricketer():void{
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if(id){
        this.cricketPlayerService.deleteCricketer(id);
        this.router.navigate(['/cricketers']);
      }
    });
  }



}
