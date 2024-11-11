import {Component, Input, OnInit} from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";
import {CurrencyPipe, DatePipe, NgIf, UpperCasePipe} from "@angular/common";
import {Observable} from "rxjs";
import { NgOptimizedImage } from '@angular/common'
import {ActivatedRoute, Router} from "@angular/router";
import {CricketPlayerService} from "../Services/cricket-player.service";

@Component({
  selector: 'app-cricketer-list-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './cricketer-list-item.component.html',
  styleUrl: './cricketer-list-item.component.css'
})
export class CricketerListItemComponent implements OnInit{

  //@Input() cricketerData?: Cricketer;

  cricketerData: Cricketer | undefined;
  cricketerList: Cricketer[] = [];
  currentIndex: number = 0;
  error: string|null = null;//to store any errors

  constructor(
    private route: ActivatedRoute,
    private cricketPlayerService: CricketPlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cricketPlayerService.getCricketer().subscribe({
      next:(cricketers:Cricketer[])=>{
        this.cricketerList = cricketers;
        this.error = null; // Clear any previous errors

        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if(id){
            this.currentIndex = this.cricketerList.findIndex(cricketer => cricketer.id === id);
            this.cricketerData = this.cricketerList[this.currentIndex];
          }
        });
      },
      error:(err) =>{
        this.error = 'Error fetching students';
        console.error('Error fetching students:',err);
      }
    });
  }

  //function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/cricketers']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.cricketerList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/cricketers', this.cricketerList[this.currentIndex].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/cricketers', this.cricketerList[this.currentIndex].id]);
    }
  }


}
