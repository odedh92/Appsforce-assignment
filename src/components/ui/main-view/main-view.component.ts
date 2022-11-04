import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/components/data-access/api-client.service';
import { Person } from 'src/components/model/model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
import { ConfirmDeletePopUpComponent } from '../confirm-delete-user/confirm-delete-pop-up/confirm-delete-pop-up.component';
import { AddUserComponent } from '../add-user/add-user/add-user.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit {

  persons: Person[] = [];
  toDelete: boolean = false;
  constructor(public apiClient: ApiClientService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getPersons()
  }

  async getPersons(): Promise<Person[]> {
    let response = await this.apiClient.get<any>()
    let persons = response.data.results
    if (persons && persons?.length > 0) {
      persons.forEach((per: Person) => {
        this.persons?.push({
          name: { title: per.name.title, first: per.name.first, last: per.name.last },
          email: per.email,
          location: { country: per.location.country, city: per.location.city, street: per.location.street},
          id: { value: per.id.value },
          picture: { mediun: per.picture.mediun }
        })
      });
    }
    return persons
  }

  async addPerson() {
    let dialogRef = this.dialog.open(AddUserComponent)
     dialogRef.afterClosed().subscribe( result => {
      this.persons?.push({
        name: { title: result.data.title, first: result.data.first, last: result.data.last },
        email: result.data.email,
        location: { country: result.data.country, city: result.data.city, street: result.data.street },
        id: { value: result.data.id },
        picture: { mediun: '' }
      })
    })
  }
  async removePerson(i: number) {
    let dialogRef = this.dialog.open(ConfirmDeletePopUpComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result.data = true)
        this.persons.splice(i, 1)
    })
  }

  async editPerson(i: number) {
    let dialogRef = this.dialog.open(EditPopUpComponent, { data: { person: this.persons[i] } })
    dialogRef.afterClosed().subscribe(result => {
      this.persons[i].id = this.persons[i].id
      this.persons[i].name.first = result.data.name.first
      this.persons[i].name.last = result.data.name.last
      this.persons[i].email = result.data.email
      this.persons[i].location.country = result.data.location.country
      this.persons[i].location.city = result.data.location.city
      this.persons[i].location.street = result.data.location.street
    })
  }
}

