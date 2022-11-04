import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { ApiResponse } from '../model/apiResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  url ='https://randomuser.me/api/?results=10';
  private axiosClient : AxiosInstance ;
  constructor() {
    this.axiosClient = axios.create({
      timeout:3000
    })
   }

   public async get<T>() : Promise <ApiResponse<T>> {
    try {
      let axiosResponse = await this.axiosClient.request<T>({
        method:'get',
        url: this.url
      })
      return { data: axiosResponse.data, error: null}
    } catch(error : any) {
      return { error : error, data:null }
    }
  }
}
