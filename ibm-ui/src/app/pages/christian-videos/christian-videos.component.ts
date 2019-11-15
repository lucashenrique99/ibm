import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosService } from 'src/app/services/videos/videos.service';

@Component({
  selector: 'app-christian-videos',
  templateUrl: './christian-videos.component.html',
  styleUrls: ['./christian-videos.component.scss']
})
export class ChristianVideosComponent implements OnInit {

  videos: Array<SafeResourceUrl>;

  constructor(
    private sanitizer: DomSanitizer,
    private videosService: VideosService
  ) { }

  ngOnInit() {
    this.videosService.findAll().subscribe(videos => {
      this.videos = videos.map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url));
    })

  }

}
