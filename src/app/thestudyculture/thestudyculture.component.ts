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
