import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  showNavigationIndicators = false;
  showNavigationArrows = false;

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  banner = [
    {
      img: 'assets/images/banner',
      title: 'WE SPECIALIZE IN IMPROVING',
      title_2:'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
      description: 'We do this by improving the way our clients use people, processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
    },
    // {
    //   img: 'assets/images/banner',
    //   title: 'WE SPECIALIZE IN IMPROVING',
    //   title_2:'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
    //   description: 'We do this by improving the way our clients use people.'
    // },
    // {
    //   img: 'assets/images/banner',
    //   title: 'WE SPECIALIZE IN IMPROVING',
    //   title_2:'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
    //   description: 'We do this by improving processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
    // }
  ];

  list;
  managedService;
  managedServiceSoftEng;
  isOpen = true;

  constructor() {
    this.list = [
        {name: 'ThePremianStory'},
        {name: 'TheStudyCulture'},
        {name: 'ThePremianEdge'},
        {name: 'Admissions'},
        {name: 'Apply'},
        {name: 'ENG'}
    ];
  }

  slideToggel() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
