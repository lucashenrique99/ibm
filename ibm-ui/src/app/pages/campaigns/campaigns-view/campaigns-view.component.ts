import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Campaign, CampaignsService } from 'src/app/services/campaings/campaigns.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var require: any;

@Component({
  selector: 'app-campaigns-view',
  templateUrl: './campaigns-view.component.html',
  styleUrls: ['./campaigns-view.component.scss']
})
export class CampaignsViewComponent implements OnInit {

  @ViewChild('quill', { static: true })
  quill: ElementRef;
  campaign: Campaign;

  editor: any;

  constructor(
    private campaigns: CampaignsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.campaign = {
      content: '',
      id: null,
      title: ''
    };

    let Quill = require('quill');
    this.editor = new Quill(this.quill.nativeElement, {
      theme: 'bubble',
      modules: {
        toolbar: null
      }
    });
    this.editor.enable(false);

    this.activatedRoute
      .paramMap
      .pipe(filter((param: ParamMap) => param && param.has("id")))
      .subscribe(
        (param: ParamMap) => {
          this.campaigns
            .findById(param.get("id"))
            .pipe(filter(value => value !== null && value !== undefined))
            .subscribe((value) => {
              this.campaign = value;
              this.editor.setContents(JSON.parse(this.campaign.content), 'api');
            })
        }
      )
  }


}
