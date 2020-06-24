import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thestudyculture',
  templateUrl: './thestudyculture.component.html',
  styleUrls: ['./thestudyculture.component.scss']
})
export class ThestudycultureComponent implements OnInit {

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
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
    {
      description: `Furtados
      School Of
      Music`,
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
    {
      description: `Yardstick`,
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
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
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
    {
      description: `Furtados
      School Of
      Music`,
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    },
    {
      description: `Yardstick`,
      description_2: `An organisation that
      seeks to empower the
      youth with an
      entrepreneurial skillset.`,
      link: `http://www.metamor
      phosisedu.com`
    }
  ];

  vision = [
    { info : ' Resilient and Confident lifelong learners'},
    { info : ' Agile and authentic individuals'},
    { info : ' Innovative and intuitive changemakers'},
    { info : ' ResiliSocially responsible and humble global citizens'},
    { info : ' Empathetic and humane souls who uphold integrity above all'}
  ];

  mission = [
    { info : ' Resilience'},
    { info : ' Agility'},
    { info : ' Integrity'},
    { info : ' Social responsibility'},
    { info : ' Empathy'}
  ];

  belief = [
    { info : ' Communication and Language'},
    { info : ' Expressive Arts and Design'},
    { info : ' Literacy'},
    { info : ' Personal, Social and Emotional Development'},
    { info : ' Mathematics'},
    { info : ' Physical Development'},
    { info : ' The World (Science and Social Studies) '},
  ];

  moreInfo = [
    { info : ' Sustained learning and the ability to apply concepts.'},
    { info : ' Facilitate self-confidence and motivation'},
    { info : ' A deeper understanding of science and math concepts '},
    { info : ' Improved reading and writing skills '},
    { info : ' Fostering positive attitudes and personal growth. '},
    { info : ' Critical thinking skills and improved quality of work.'},
    { info : ' Remarkable academic success'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
