import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  banner = [
    {
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      title: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];

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


  admissionConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  constructor() {
  }

  events = [
    {
      eventDate: 'february 6, 2020',
      title: 'CIS events and school visits impacted by Coronavirus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    },
    {
      eventDate: 'february 6, 2020',
      title: 'CIS events and school visits impacted by Coronavirus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    },
    {
      eventDate: 'february 6, 2020',
      title: 'CIS events and school visits impacted by Coronavirus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    },
    {
      eventDate: 'february 6, 2020',
      title: 'CIS events and school visits impacted by Coronavirus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    }
  ];

  admission = [
    {
      icon: '#icon_softEngg',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_softEngg',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_softEngg',
      description: `Nurturing a
Progressive
Mindset`,
    },
    {
      icon: '#icon_softEngg',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_softEngg',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_softEngg',
      description: `Nurturing a
Progressive
Mindset`,
    },
  ];


  notify = [
    {
      title: 'Vision',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    },
    {
      title: 'Mission',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    },
  ];

 solution = [
    {
      description: `Comprehensive Development`,
      icon: '#icon_mgmt'
    },
    {
      description: `Communication and
      vocational training`,
      icon: '#icon_softEngg'
    },
    {
      description: `Performing arts`,
      icon: '#icon_training'
    },
    {
      description: `Sports`,
      icon: '#icon_mgmt'
    },
    {
      description: `Health and Fitness`,
      icon: '#icon_softEngg'
    },
    {
      description: `Emotional Development`,
      icon: '#icon_training'
    },
  ];



  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  premianLeague = [
    {
      name: 'SHRI PRADEEP REDDY',
      post: 'SOCIETY PRESIDENT',
      desc: `IITian
Renowned
Business Icon` },
    {
      name: 'MS. TRUPTI RAO',
      post: 'PRINCIPAL',
      desc: `Educator, Teacher, Achiever
 21+ Years of experience
19 years at Meridian` },
    {
      name: 'MS. MALINI PAUL',
      post: 'HEADMISTRESS',
      desc: `Facilitator, Visionary,
educationist
30+ Years of
experience` },
    {
      name: 'SHRI PRADEEP REDDY',
      post: 'SOCIETY PRESIDENT',
      desc: `IITian
Renowned
Business Icon` },
    {
      name: 'MS. TRUPTI RAO',
      post: 'PRINCIPAL',
      desc: `Educator, Teacher, Achiever
21+ Years of experience
19 years at Meridian` },
    {
      name: 'MS. MALINI PAUL',
      post: 'HEADMISTRESS',
      desc: `Facilitator, Visionary,
educationist
30+ Years of
experience` },
  ];

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

