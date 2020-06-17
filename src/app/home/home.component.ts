import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
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
      icon: '#icon_training',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_training',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_training',
      description: `Nurturing a
Progressive
Mindset`,
    },
    {
      icon: '#icon_training',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_training',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_training',
      description: `Nurturing a
Progressive
Mindset`,
    },
  ];


  notify = [
    {
      title: 'Vision',
      description: 'Our vision is to raise, our ‘Premia Pride’ to live their dreams as a generation who are:',
      moreInfo : [
        { info : 'Resilient and Confident lifelong learners'},
        { info : 'Agile and authentic individuals'},
        { info : 'Innovative and intuitive changemakers'},
        { info : 'Socially responsible and humble global citizens'},
        { info : 'Empathetic and humane souls who uphold integrity above all'}
      ]
    },
    {
      title: 'Mission',
      description: `Our students will be equipped to meet the current and future challenges with
      values of
      `,
      moreInfo : [
        { info : 'Resilience'},
        { info : 'Agility'},
        { info : 'Integrity'},
        { info : 'Social responsibility'},
        { info : 'Empathy'},
      ]
    },
  ];

 solution = [
    {
      description: `Comprehensive Development`,
      icon: '#icon_termDevelopment'
    },
    {
      description: `Communication and
      vocational training`,
      icon: '#icon_commTrainning'
    },
    {
      description: `Performing arts`,
      icon: '#icon_art'
    },
    {
      description: `Sports`,
      icon: '#icon_tophy'
    },
    {
      description: `Health and Fitness`,
      icon: '#icon_health'
    },
    {
      description: `Emotional Development`,
      icon: '#icon_emoDev'
    },
  ];

  testimonials = [
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: 'xyz Company',
      desti: 'CEO'
    },
    {
      clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
      clientName: 'ABC Company',
      desti: 'CEO'
    },
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: '123 Company',
      desti: 'CEO'
    },
    {
      clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
      clientView_3: ' Proin sodales pulvinar tempor.',
      clientName: 'QWERTy',
      desti: 'CEO'
    },
];

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  premianLeague = [
    {
      name:'SHRI PRADEEP REDDY',
      post:'SOCIETY PRESIDENT',
      desc:`IITian
Renowned
Business Icon` },
    {
      name:'MS. TRUPTI RAO',
      post:'PRINCIPAL',
      desc:`Educator, Teacher, Achiever
 21+ Years of experience
19 years at Meridian` },
    {
      name:'MS. MALINI PAUL',
      post:'HEADMISTRESS',
      desc:`Facilitator, Visionary, educationist
30+ Years of experience` },
    {
      name:'SHRI PRADEEP REDDY',
      post:'SOCIETY PRESIDENT',
      desc:`IITian
Renowned
Business Icon` },
    {
      name:'MS. TRUPTI RAO',
      post:'PRINCIPAL',
      desc:`Educator, Teacher, Achiever
21+ Years of experience
19 years at Meridian` },
    {
      name:'MS. MALINI PAUL',
      post:'HEADMISTRESS',
      desc:`Facilitator, Visionary, educationist
30+ Years of experience` },
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

  knowMore = function(text) {
    if(text == 'culture'){
      this.router.navigateByUrl('/TheStudyCulture', {skipLocationChange: true});
    }else if(text == 'edge'){
      this.router.navigateByUrl('/ThePremianEdge', {skipLocationChange: true});
    }

};



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

