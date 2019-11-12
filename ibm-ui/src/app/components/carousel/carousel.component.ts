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
  @Input() showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1, 2, 3].map(() => `https://picsum.photos/1920/500?random&t=${Math.random()}`);
  // images = ['https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/71043135_2406102292935346_5281979032915673088_o.jpg?_nc_cat=109&efg=eyJpIjoidCJ9&_nc_oc=AQkfWUtcQT3AKPuLIMqozYnuqpn7PjtDsJmgYLIDwVgE_apqNuM0Ywxexwu6uymlIjI&_nc_ht=scontent.fbsb9-1.fna&oh=2bcb9d1710486259183cf2b9d88c6da2&oe=5E3FBA13']

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }

}
