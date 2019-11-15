import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/services/lessons/lessons.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-downloads-page',
  templateUrl: './downloads-page.component.html',
  styleUrls: ['./downloads-page.component.scss']
})
export class DownloadsPageComponent implements OnInit {

  downloads: Array<any>;

  constructor(
    private lessons: LessonsService
  ) { }

  ngOnInit() {
    this.lessons.findAll().subscribe(lessons => {
      this.downloads = lessons.map(lesson => { const { title, url, date } = lesson; return { title, url, date } });
      console.log(this.downloads)
    })
  }

  getURL(url) {
    return environment.apiURL + "/lessons/" + url;
  }
}
