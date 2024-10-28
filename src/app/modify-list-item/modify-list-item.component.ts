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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cricketerService.findStudentId(+id).subscribe(cricketer => {
        if(cricketer) {
          this.cricketer = cricketer;

          this.cricketerForm.patchValue(cricketer);
        }
      });
    }
  }


  //Add and update method in onSubmit method
  onSubmit(): void {
    const cricketer: Cricketer = this.cricketerForm.value;

    if (cricketer.id) {
      this.cricketerService.updateCricketer(cricketer);
    } else {
      console.log("else is working");
      const newId = this.cricketerService.generateNewId();
      console.log('Generated new ID:', newId);
      cricketer.id = newId;
      this.cricketerService.addNewCricketer(cricketer);
    }

    this.router.navigate(['/cricketers']);
  }



}
