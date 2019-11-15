import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  @Input() captionMessage = "Igreja Batista Missionária";
  @Input() showNavigationArrows = false;
  showNavigationIndicators = false;
  images: Array<string>;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    // this.images = [1, 2, 3].map(() => `https://picsum.photos/1920/500?random&t=${Math.random()}`);
    this.images = ['assets/img/banner.webp'];
  }

}
