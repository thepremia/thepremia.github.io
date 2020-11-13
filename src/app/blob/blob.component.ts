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
          small: 'assets/images/hl/hl1.jpeg',
          medium: 'assets/images/hl/hl1.jpeg',
          big: 'assets/images/hl/hl1.jpeg'
      },
      {
          small: 'assets/images/hl/hl2.jpeg',
          medium: 'assets/images/hl/hl2.jpeg',
          big: 'assets/images/hl/hl2.jpeg'
      },
      {
        small: 'assets/images/hl/hl3.jpeg',
        medium: 'assets/images/hl/hl3.jpeg',
        big: 'assets/images/hl/hl3.jpeg'
      },
      {
        small: 'assets/images/hl/hl4.jpeg',
          medium: 'assets/images/hl/hl4.jpeg',
          big: 'assets/images/hl/hl4.jpeg'
    },
      {
        small: 'assets/images/hl/hl5.jpeg',
        medium: 'assets/images/hl/hl5.jpeg',
        big: 'assets/images/hl/hl5.jpeg'
      }
  ];



  this.swImages = [
    {
        small: 'assets/images/sw/sw1.jpeg',
        medium: 'assets/images/sw/sw1.jpeg',
        big: 'assets/images/sw/sw1.jpeg'
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
    medium: 'assets/images/pe/pe3.jpg',
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
  
];

}

}
