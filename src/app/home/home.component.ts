import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('collapse', {static: false}) collapse: ElementRef;


  partnerConfig = {
    slidesToShow: 4,
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
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  };

  partner = [
    {
      description: `Metamor-
      phosis`,
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
    {
      description: `Sportz Village`,
      description_2: `A platform that focuses on the
      aspects of physical education`,
      link: `https://www.sportzvillage.com/schools/ `
    },
    {
      description: `Furtados
      School Of
      Music`,
      description_2: `One of the largest
      music educators of India`,
      link: `https://furtadosschoolofmusic.com`
    },
    {
      description: `Yardstick`,
      description_2: `Learning programs that
      enhance the child's experience`,
      link: ` http://www.yardstickedu.com`
    },
    {
      description: `NumberNagar`,
      description_2: `An integrated program for Maths,
      Science and English`,
      link: `https://www.numbernagar.com/`
    },
    {
      description: `Creya Learning`,
      description_2: `An organisation that helps 
      children become inventors and innovators`,
      link: `https://www.creyalearning.com/stem/`
    },
    {
      description: `Book room from Scholastic`,
      description_2: `Organising your books`,
      link: `http://teacher.scholastic.com/products/leveledbookrooms/index.htm`
    }
  ];

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

  premianLeagueConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

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
          slidesToShow: 1
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
          slidesToShow: 1
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

  constructor(private router: Router, private renderer: Renderer2) {
    
  }

  isOpen = true;
  drowDownToggle() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.collapse.nativeElement, 'test');
  }
  ngOnInit(){
    
  }

  admission = [
    {
      icon: '#icon_reading',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_education',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_emoDev',
      description: `Nurturing a
Progressive
Mindset`,
    },
    {
      icon: '#icon_reading',
      description: `Sculpting
Young
Learners`,
    },
    {
      icon: '#icon_education',
      description: `Imparting
Holistic
Education`,
    },
    {
      icon: '#icon_emoDev',
      description: `Nurturing a
Progressive
Mindset`,
    }
  ];

  thePremiaCorner = [
    {
      icon: '#icon_reading',
      description: `Our Blogs`,
    },
    {
      icon: '#icon_education',
      description: `Students Work`,
    },
    {
      icon: '#icon_emoDev',
      description: `Hand on Learning`,
    },
    {
      icon: '#icon_reading',
      description: `Premia events`,
    }
  ];


  notify = [
    {
      title: 'Vision',
      description: 'Our vision is to raise, our ‘Premia Pride’ to live their dreams as a generation who are:',
      moreInfo: [
        { info: 'Resilient and Confident lifelong learners' },
        { info: 'Agile and authentic individuals' },
        { info: 'Innovative and intuitive changemakers' },
        { info: 'Socially responsible and humble global citizens' },
        { info: 'Empathetic and humane souls who uphold integrity above all' }
      ]
    },
    {
      title: 'Mission',
      description: `Our students will be equipped to meet the current and future challenges with
      values of
      `,
      moreInfo: [
        { info: 'Resilience' },
        { info: 'Agility' },
        { info: 'Integrity' },
        { info: 'Social responsibility' },
        { info: 'Empathy' },
      ]
    },
    {
      title: 'Values',
      description: `Our students will be equipped to meet the current and future challenges with
      values of
      `,
      moreInfo: [
        { info: 'Resilience' },
        { info: 'Agility' },
        { info: 'Integrity' },
        { info: 'Social responsibility' },
        { info: 'Empathy' },
      ]
    }
  ];

  solution = [
    {
      description: `Comprehensive Development`,
      icon: '#icon_termDevelopment'
    },
    {
      description: `Communication and
      Vocational Training`,
      icon: '#icon_commTrainning'
    },
    {
      description: `Performing Arts`,
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
      clientView: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn.',
      clientName: `Sweta D.S
      Parent of Sanketh D.S`
    },
    {
      clientView: `I've always believed in holistic education and when I met with academicians at Premia, that's what seemed to be their plan. `,
      clientName: `Sushma Panyam 
      Parent of Nihal Singaraju`
    },
    {
      clientView: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn.',
      clientName: `Sweta D.S
      Parent of Sanketh D.S`
    }
  ];

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  premianLeague = [
    {
      name: 'Why we exist',
      gridClass:'col-md-2 col-md-offset-1'
    },
    {
      name: 'What we offer',
      gridClass:'col-md-2'
    },
    {
      name: 'How we make if happen',
      gridClass:'col-md-2 '
    },
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
    if (text === 'culture') {
      this.router.navigateByUrl('/ThePremiaCulture', { skipLocationChange: true });
    } else if (text === 'edge') {
      this.router.navigateByUrl('/ThePremiaEdge', { skipLocationChange: true });
    } else if (text === 'apply') {
      this.router.navigateByUrl('/JoinThePremiaPride', { skipLocationChange: true });
    } else if (text === 'admission') {
      this.router.navigateByUrl('/JoinThePremiaPride', { skipLocationChange: true });
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

