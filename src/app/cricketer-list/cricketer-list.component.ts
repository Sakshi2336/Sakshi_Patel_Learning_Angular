import {Component, OnInit} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgForOf, NgIf} from "@angular/common";
import {CricketerListItemComponent} from "../cricketer-list-item/cricketer-list-item.component";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {cricketersList} from "../Shared/mockCricketer.data";

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
  error: string | null = null;

  //calling our service
  constructor(private cricketPlayerService : CricketPlayerService,
              private route: ActivatedRoute,
              private router :Router) {

  }

  ngOnInit() {
    //this life cycle hook is a good place to fetch init our data
    this.cricketPlayerService.getCricketer().subscribe({
      next:(data:Cricketer[]) => {
        this.cricketerList = data;
        this.error=null; //Clear any previous errors
        }, //data is just variable name here

      error:err=>{
        this.error = 'Error fetching cricketers'; //Set an error message
        console.error("Error fetching cricketers",err);
      },
      complete:() => console.log("Cricketer data fetch complete successfully!")
    })

  }

  selectedCricketer?: Cricketer;
  selectCricketer(cricketer: Cricketer): void {
    this.selectedCricketer = cricketer;
  }


  deleteCricketer(id:number):void{
    this.cricketerList = this.cricketerList.filter(cricketer => cricketer.id !== id);
  }

  editButton():void{
    this.router.navigate(['/modify-cricketer']);
  }


}
