import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/components/model/model';
import { ValidationService } from 'src/components/services/validation-services.service';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent implements OnInit {

  first: string;
  last: string;
  email: string;
  city: string = '';
  country: string = '';
  street: string = '';


  constructor(@Inject(MAT_DIALOG_DATA) public data: { person: Person }, private dialogRef: MatDialogRef<Person>,public validation :ValidationService) {
    this.first = this.data?.person?.name?.first ?? '';
    this.last = this.data?.person?.name?.last ?? '';
    this.email = this.data?.person?.email ?? '';
    this.country = this.data?.person?.location?.country ?? '';
    this.city = this.data?.person?.location?.city ?? '';
    this.street = this.data?.person?.location?.street.name ?? '';
  }

  ngOnInit(): void {

  }

  submitEdit() {
    this.validation.editValidation(this.first,this.last,this.email,this.country,this.city,this.street)
    if (this.validation.validEditForm) {
    this.data.person.name.first = this.first
    this.data.person.name.last = this.last
    this.data.person.email = this.email
    this.data.person.location.country = this.country
    this.data.person.location.city = this.city
    this.data.person.location.street.name = this.street
    this.dialogRef.close({ data: this.data });
  }
}
cleanErrors(){
  this.validation.resetErrors()
}

}
