import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {Cricketer} from "../Shared/Modules/cricketer";
import {NgIf} from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {AutoFocusDirective} from "../directives/auto-focus.directive";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    HighlightOnFocusDirective,
    AutoFocusDirective,
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{

  // form group
  cricketerForm : FormGroup;
  cricketer : Cricketer | undefined;
  error: string | null = null;

  //Adding form builder and validators
  constructor(
    private fb:FormBuilder,
    private route : ActivatedRoute,
    private cricketerService : CricketPlayerService,
    private router : Router
  ) {
    this.cricketerForm = this.fb.group({
      id : [cricketerService.generateNewId()],
      firstName : [''],
      lastName : [''],
      age : [''],
      country : [''],
      dob : [''],
      netWorth : [''],
      role : [''],
      isActive : [false]
    })
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      console.log("OnInit is working");
      this.cricketerService.findStudentId(id).subscribe({
        next: cricketer =>{
          if(cricketer) {
            this.cricketerForm.patchValue(cricketer);
          }
        },
        error: err => {
          this.error = 'Error fetching cricketer';
          console.error('Error fetching cricketer:', err);
        }
      });
    }
  }


  //Add and update method in onSubmit method
  onSubmit(): void {
    if (this.cricketerForm.valid) {
      const cricketer: Cricketer = this.cricketerForm.value;
      if (cricketer.id) {
        console.log(cricketer.id);
        this.cricketerService.updateCricketer(cricketer).subscribe(() => this.router.navigate(['/cricketers']));
      } else {
        console.log(cricketer.id);
        cricketer.id = this.cricketerService.generateNewId();
        console.log(cricketer.id);
        this.cricketerService.addNewCricketer(cricketer).subscribe(() => this.router.navigate(['/cricketers']));
      }
    }
  }

  navigateToCricketerList(): void {
    this.router.navigate(['/cricketers']);
  }



}
