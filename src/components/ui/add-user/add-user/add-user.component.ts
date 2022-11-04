import { Component, OnInit ,NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/components/model/model';
import { ValidationService } from 'src/components/services/validation-services.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  title:string = '';
  first:string = '';
  last:string = '';
  email:string = '';
  id:string = '';
  country:string = '';
  city:string = '';
  street:string = '';
  
  constructor(private dialogRef: MatDialogRef<Person>,public validation :ValidationService) { }

  ngOnInit(): void {
  }
  addUser(){
    this.validation.addUserValidation(this.first,this.last,this.email,this.id,this.country,this.city,this.street)
    if (this.validation.validForm) {
      const person = {
        'first': this.first ,
        'last': this.last,
        'title':this.title ?? ' Mr ',
        'email':this.email,
        'id': this.id,
        'country': this.country,
        'city':this.city,
        'street':this.street
      };
      this.dialogRef.close({ data: person});
    } else {
      console.log('error');
    }
  }
  cleanErrors(){
    this.validation.resetErrors()
  }

}
