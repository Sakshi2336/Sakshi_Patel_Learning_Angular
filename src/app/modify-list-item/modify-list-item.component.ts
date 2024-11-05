import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {Cricketer} from "../Shared/Modules/cricketer";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
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
      id : ['',[Validators.required,Validators.pattern(/^[0-9]+$/)]],
      firstName : ['',Validators.required,Validators.pattern(/^[A-Za-z]*$/)],
      lastName : ['',Validators.required],
      role : ['',Validators.required],
      isActive : [false]
    })
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.cricketerService.findStudentId(+id).subscribe({
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
      //Iff the form is valid, it extracts the form values into a student object of type User
      const cricketer: Cricketer = this.cricketerForm.value;
      /*
      Here we have a little bit of logic, first iff the student.id
      and just being updated

      if it does not exist, we know that the student is new and we need to add it to the list
       */
      if (cricketer.id) {
        this.cricketerService.updateCricketer(cricketer).subscribe(() => this.router.navigate(['/cricketers']));
      } else {
        cricketer.id = this.cricketerService.generateNewId();
        this.cricketerService.addNewCricketer(cricketer).subscribe(() => this.router.navigate(['/cricketers']));
      }
    }
  }

  navigateToCricketerList(): void {
    this.router.navigate(['/cricketers']);
  }



}
