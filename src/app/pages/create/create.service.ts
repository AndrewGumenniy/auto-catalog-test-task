import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auto } from 'src/app/shared/models/auto';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateAutoService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createNewAuto(model: Auto) {
    // real request
    return this.http.post(this.baseUrl + 'createAuto', model);
  }
}
