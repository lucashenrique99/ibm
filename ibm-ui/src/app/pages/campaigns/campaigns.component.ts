import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignsService } from 'src/app/services/campaings/campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaigns: Array<any>;

  constructor(
    private campaignsService: CampaignsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.campaignsService.findAll()
      .subscribe(array => this.campaigns = array);
  }

  onClick(id) {
    this.router.navigate([`/campanhas/${id}`])
  }

}
