import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Array<Campaign>> {
    return this.http.get<Array<Campaign>>(`${environment.apiURL}/campaigns`);
  }

  findById(id: number | string): Observable<Campaign> {
    return this.http.get<Campaign>(`${environment.apiURL}/campaigns/${id}`);
  }

}

export interface Campaign {

  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  startDate?: Date;
  endDate?: Date;
  visible?: boolean;

}