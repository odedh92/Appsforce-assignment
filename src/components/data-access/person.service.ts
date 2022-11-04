import { Injectable } from '@angular/core';
import { Person } from '../model/model';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private apiClient: ApiClientService) { }

  async getPersons(){
		return await this.apiClient.get<Person[]>()
  }
}
