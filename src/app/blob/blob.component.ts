import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModal, NgbSlideEvent, NgbSlideEventSource, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss']
})
export class BlobComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    hlImages: NgxGalleryImage[];
    swImages: NgxGalleryImage[];
    peImages:NgxGalleryImage[];


  constructor(private modalService: NgbModal, ) { }
  closeResult = '';
  notifyOpen(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'notification-popup'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  admission = [
    {
      date: '2nd May 2020',
      title: `World for all
      and all for the
      world!`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.
      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into the Premia Academy.
      `,
    },
    {
      date: '2nd May 2020',
      title: `Gaming
      Addiction or
      Enthusiasm`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.
      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into the Premia Academy.
      `,
    },
    {
      date: '2nd May 2020',
      title: `Developing
      language Across
      the Curriculum`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.
      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into the Premia Academy.
      `,
    },
    {
      date: '2nd May 2020',
      title: `World for all
      and all for the
      world!`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.
      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into the Premia Academy.
      `,
    },
    {
      date: '2nd May 2020',
      title: `Gaming
      Addiction or
      Enthusiasm`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.
      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into the Premia Academy.
      `,
    },
    {
      date: '2nd May 2020',
      title: `Developing
      language Across
      the Curriculum`,
      description: `Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.
      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. 
      So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! 
      Her endeavours have snowballed into the Premia Academy.
      `,
    }
  ];


  recentConfig = {
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

  thePremiaCorner = [
    {
      icon: '#icon_reading',
      description: `Premia Blogs`,
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
  ngOnInit(): void {
 
    this.galleryOptions = [
        {
            width: '700px',
            height: '500px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: 'assets/images/1.jpg',
            medium: 'assets/images/1.jpg',
            big: 'assets/images/1-big.jpg'
        },
        {
            small: 'assets/images/2.jpg',
            medium: 'assets/images/2.jpg',
            big: 'assets/images/2.jpg'
        },
        {
            small: 'assets/images/3.jpg',
            medium: 'assets/images/3.jpg',
            big: 'assets/images/3.jpg'
        },
        {
          small: 'assets/images/4.jpg',
          medium: 'assets/images/4.jpg',
          big: 'assets/images/4.jpg'
      },
        {
            small: 'assets/images/banner.mp4',
            medium: 'assets/images/banner.mp4',
            big: 'assets/images/banner.mp4'
        }
    ];

    this.hlImages = [
      {
          small: 'assets/images/hl/hl1.jpg',
          medium: 'assets/images/hl/hl1.jpg',
          big: 'assets/images/hl/hl1.jpg'
      },
      {
          small: 'assets/images/hl/hl2.jpg',
          medium: 'assets/images/hl/hl2.jpg',
          big: 'assets/images/hl/hl2.jpg'
      },
      {
        small: 'assets/images/hl/hl3.jpg',
        medium: 'assets/images/hl/hl3.jpg',
        big: 'assets/images/hl/hl3.jpg'
      },
      {
        small: 'assets/images/hl/hl4.jpg',
        medium: 'assets/images/hl/hl4.jpg',
        big: 'assets/images/hl/hl4.jpg'
      },
      {
        small: 'assets/images/hl/hl5.jpg',
        medium: 'assets/images/hl/hl5.jpg',
        big: 'assets/images/hl/hl5.jpg'
      },
      {
          small: 'assets/images/hl/hl6.jpg',
          medium: 'assets/images/hl/hl6.jpg',
          big: 'assets/images/hl/hl6.jpg'
      },
      {
          small: 'assets/images/hl/hl7.jpg',
          medium: 'assets/images/hl/hl7.jpg',
          big: 'assets/images/hl/hl7.jpg'
      },
      {
        small: 'assets/images/hl/hl8.jpg',
        medium: 'assets/images/hl/hl8.jpg',
        big: 'assets/images/hl/hl8.jpg'
      },
      {
        small: 'assets/images/hl/hl9.jpg',
          medium: 'assets/images/hl/hl9.jpg',
          big: 'assets/images/hl/hl9.jpg'
    },
      {
        small: 'assets/images/hl/hl10.jpg',
        medium: 'assets/images/hl/hl10.jpg',
        big: 'assets/images/hl/hl10.jpg'
      },
      {
          small: 'assets/images/hl/hl11.jpg',
          medium: 'assets/images/hl/hl11.jpg',
          big: 'assets/images/hl/hl11.jpg'
      },
      {
          small: 'assets/images/hl/hl12.jpg',
          medium: 'assets/images/hl/hl12.jpg',
          big: 'assets/images/hl/hl12.jpg'
      },
      {
        small: 'assets/images/hl/hl13.jpg',
        medium: 'assets/images/hl/hl13.jpg',
        big: 'assets/images/hl/hl13.jpg'
      },
      {
        small: 'assets/images/hl/hl14.jpg',
          medium: 'assets/images/hl/hl14.jpg',
          big: 'assets/images/hl/hl14.jpg'
    },
      {
        small: 'assets/images/hl/hl15.jpg',
        medium: 'assets/images/hl/hl15.jpg',
        big: 'assets/images/hl/hl15.jpg'
      },
      {
        small: 'assets/images/hl/hl16.jpg',
        medium: 'assets/images/hl/hl16.jpg',
        big: 'assets/images/hl/hl16.jpg'
      }
  ];



  this.swImages = [
    {
        small: 'assets/images/sw/sw1.jpg',
        medium: 'assets/images/sw/sw1.jpg',
        big: 'assets/images/sw/sw1.jpg'
    },
    {
        small: 'assets/images/sw/sw2.jpg',
        medium: 'assets/images/sw/sw2.jpg',
        big: 'assets/images/sw/sw2.jpg'
    },
    {
      small: 'assets/images/sw/sw3.jpg',
      medium: 'assets/images/sw/sw3.jpg',
      big: 'assets/images/sw/sw3.jpg'
    },
    {
      small: 'assets/images/sw/sw4.jpg',
      medium: 'assets/images/sw/sw4.jpg',
      big: 'assets/images/sw/sw4.jpg'
    },
    {
      small: 'assets/images/sw/sw5.jpg',
      medium: 'assets/images/sw/sw5.jpg',
      big: 'assets/images/sw/sw5.jpg'
    },
    {
      small: 'assets/images/sw/sw6.jpg',
      medium: 'assets/images/sw/sw6.jpg',
      big: 'assets/images/sw/sw6.jpg'
    },
    {
      small: 'assets/images/sw/sw7.jpg',
      medium: 'assets/images/sw/sw7.jpg',
      big: 'assets/images/sw/sw7.jpg'
    },
    {
      small: 'assets/images/sw/sw8.jpg',
      medium: 'assets/images/sw/sw8.jpg',
      big: 'assets/images/sw/sw8.jpg'
    },
    {
      small: 'assets/images/sw/sw9.jpg',
      medium: 'assets/images/sw/sw9.jpg',
      big: 'assets/images/sw/sw9.jpg'
    },
    {
      small: 'assets/images/sw/sw10.jpg',
      medium: 'assets/images/sw/sw10.jpg',
      big: 'assets/images/sw/sw10.jpg'
    },
    {
      small: 'assets/images/sw/sw11.jpg',
      medium: 'assets/images/sw/sw11.jpg',
      big: 'assets/images/sw/sw11.jpg'
    }
    
];

this.peImages = [
  {
      small: 'assets/images/pe/pe1.jpg',
      medium: 'assets/images/pe/pe1.jpg',
      big: 'assets/images/pe/pe1.jpg'
  },
  {
      small: 'assets/images/pe/pe2.jpg',
      medium: 'assets/images/pe/pe2.jpg',
      big: 'assets/images/pe/pe2.jpg'
  },
  {
    small: 'assets/images/pe/pe3.jpg',
    medium: 'assets/images/pe/pe3.jpg' ,
    big: 'assets/images/pe/pe3.jpg'
  },
  {
    small: 'assets/images/pe/pe4.jpg',
    medium: 'assets/images/pe/pe4.jpg',
    big: 'assets/images/pe/pe4.jpg'
},
{
    small: 'assets/images/pe/pe5.jpg',
    medium: 'assets/images/pe/pe5.jpg',
    big: 'assets/images/pe/pe5.jpg'
},
{
  small: 'assets/images/pe/pe6.jpg',
  medium: 'assets/images/pe/pe6.jpg',
  big: 'assets/images/pe/pe6.jpg'
},
{
  small: 'assets/images/pe/pe7.jpg',
  medium: 'assets/images/pe/pe7.jpg',
  big: 'assets/images/pe/pe7.jpg'
},
{
  small: 'assets/images/pe/pe8.jpg',
  medium: 'assets/images/pe/pe8.jpg',
  big: 'assets/images/pe/pe8.jpg'
},
{
small: 'assets/images/pe/pe9.jpg',
medium: 'assets/images/pe/pe9.jpg',
big: 'assets/images/pe/pe9.jpg'
},
   {
      small: 'assets/images/pe/pe10.jpg',
      medium: 'assets/images/pe/pe10.jpg',
      big: 'assets/images/pe/pe10.jpg'
  },
  {
      small: 'assets/images/pe/pe11.jpg',
      medium: 'assets/images/pe/pe11.jpg',
      big: 'assets/images/pe/pe11.jpg'
  },
  {
      small: 'assets/images/pe/pe12.jpg',
      medium: 'assets/images/pe/pe12.jpg',
      big: 'assets/images/pe/pe12.jpg'
  },
  {
    small: 'assets/images/pe/pe13.jpg',
    medium: 'assets/images/pe/pe13.jpg' ,
    big: 'assets/images/pe/pe13.jpg'
  },
  {
    small: 'assets/images/pe/pe14.jpg',
    medium: 'assets/images/pe/pe14.jpg',
    big: 'assets/images/pe/pe14.jpg'
},
{
    small: 'assets/images/pe/pe15.jpg',
    medium: 'assets/images/pe/pe15.jpg',
    big: 'assets/images/pe/pe15.jpg'
},
{
  small: 'assets/images/pe/pe16.jpg',
  medium: 'assets/images/pe/pe16.jpg',
  big: 'assets/images/pe/pe16.jpg'
},
 
];

}

}
