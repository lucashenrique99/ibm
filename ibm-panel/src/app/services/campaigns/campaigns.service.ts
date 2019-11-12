import { Injectable } from '@angular/core';
import { CrudInterface } from '../interface/crud-interface';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService implements CrudInterface<Campaign, number>  {

  campaigns: Array<Campaign> = [];
  campaigns$: BehaviorSubject<Array<Campaign>>;

  constructor(
    private http: HttpClient
  ) {
    this.campaigns$ = new BehaviorSubject(this.campaigns);
  }

  findAll(): Observable<Array<Campaign>> {
    // return this.campaigns$;
    return this.http.get<Array<Campaign>>(`${environment.apiURL}/campaigns`);
  }

  findById(id: number): Observable<Campaign> {
    // const campaigns = this.campaigns.find(u => u.id == id);
    // return new BehaviorSubject(campaigns ? campaigns : null);
    return this.http.get<Campaign>(`${environment.apiURL}/campaigns/${id}`);
  }

  save(campaign: any): Observable<Campaign> {
    return (campaign.id) ? this.update(campaign) : this.insert(campaign);
  }

  private insert(campaign: Campaign): Observable<Campaign> {
    // if (!campaign.id) {
    //   campaign.id = Math.ceil(Math.random() * 1000);
    // }
    // this.campaigns.push(campaign);
    // this.campaigns$.next(this.campaigns);

    // return new BehaviorSubject(campaign);
    return this.http.post<Campaign>(`${environment.apiURL}/campaigns`, campaign);
  }

  private update(campaign: Campaign): Observable<Campaign> {
    // this.campaigns = this.campaigns.filter(u => u.id != campaign.id);
    // return this.insert(campaign);
    return this.http.put<Campaign>(`${environment.apiURL}/campaigns/${campaign.id}`, campaign);
  }

  delete(id: number): Observable<Campaign> {
    // this.campaigns = this.campaigns.filter(u => u.id != id);
    // this.campaigns$.next(this.campaigns);
    // return new BehaviorSubject(null);
    return this.http.delete<Campaign>(`${environment.apiURL}/campaigns/${id}`);
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
