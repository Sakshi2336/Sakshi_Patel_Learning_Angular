import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CricketPlayerService} from "../Services/cricket-player.service";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {

  // form group
  cricketerForm : FormGroup;

  //Adding form builder and validators
  constructor(
    private fb:FormBuilder,
    private route : ActivatedRoute,
    private cricketerService : CricketPlayerService,
    private router : Router
  ) {
    this.cricketerForm = this.fb.group({
      id : ['',Validators.required],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      role : ['',Validators.required],
      isAdmin : ['',Validators.required]
    })
  }


}
