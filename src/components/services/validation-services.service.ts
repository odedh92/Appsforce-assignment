import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  errorEmail: string = 'Please enter a valid email';
  errorFirst: string = 'Please enter min 3 char';
  errorLast: string = 'Please enter min 3 char';
  errorId: string = 'Please enter a valid Id';
  errorCountry: string = 'Please enter min 3 char';
  errorCity: string = 'Please enter min 3 char';
  errorStreet: string = 'Please enter min 3 char';
  showErrorEmail: boolean = false;
  showErrorFirst: boolean = false;
  showErrorLast: boolean = false;
  showErrorId: boolean = false;
  showErrorCountry: boolean = false;
  showErrorCity: boolean = false;
  showErrorStreet: boolean = false;
  validEditForm:boolean = true;
  validForm: boolean = true;
  constructor() { }

  editValidation(first:string,last:string,email:string,country:string,city:string,street:string) {
    first.length < 3 ? this.showErrorFirst = true : this.showErrorFirst = false  
    last?.length < 3 ? this.showErrorLast = true : this.showErrorLast = false  
    country.length <= 2 ? this.showErrorCountry = true : this.showErrorCountry = false
    city.length <= 2 ? this.showErrorCity = true : this.showErrorCity = false
    street.length <= 2 ? this.showErrorStreet = true : this.showErrorStreet = false
    this.checkEmail(email) ? this.showErrorEmail = false : this.showErrorEmail = true
    this.validEditForm = !this.showErrorFirst && !this.showErrorLast && !this.showErrorEmail 
    && !this.showErrorCity && !this.showErrorCountry && !this.showErrorStreet
  }

  addUserValidation(first:string,last:string,email:string,id:string,country:string,city:string,street:string){
   this.editValidation(first,last,email,country,city,street)
   id.length <= 0 ? this.showErrorId = true : this.showErrorId = false
   this.validForm = this.validEditForm && !this.showErrorId
  }
  resetErrors(){
    this.showErrorEmail= false;
    this.showErrorFirst= false;
    this.showErrorLast = false;
    this.showErrorId = false;
    this.showErrorCountry = false;
    this.showErrorCity = false;
    this.showErrorStreet = false;
  }
  checkEmail (email:string) { return /^\S+@\S+\.\S+$/.test(email); }
}
