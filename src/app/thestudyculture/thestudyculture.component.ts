import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thestudyculture',
  templateUrl: './thestudyculture.component.html',
  styleUrls: ['./thestudyculture.component.scss']
})
export class ThestudycultureComponent implements OnInit {

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
    { info : ' Literacy'},
    { info : ' Mathematics'},
    { info : ' The World (Science and Social Studies)'},
    { info : ' Expressive Arts and Design '},
    { info : ' Personal, Social and Emotional Development'},
    { info : ' Physical Development'},
  ];

  curriculum = [
    { info : ' Sustained learning and the ability to apply concepts.'},
    { info : ' Facilitate self-confidence and motivation'},
    { info : ' A deeper understanding of science and math concepts '},
    { info : ' Improved reading and writing skills'},
    { info : ' Fostering positive attitudes and personal growth. '},
    { info : ' Critical thinking skills and improved quality of work. '},
    { info : ' Remarkable academic success'}
];

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

  moreInfo = [
    { info : ' Best possible start to learning ',
      info_2 : 'Our caring, experienced teachers and teacher assistants give our youngest students the best possible start to learning. Our play-based learning environment captures their natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment. '},
    { info : ' A positive foundation for learning  ',
      info_2 : 'At The Premia Academy children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express themselves as individuals. Sustained learning and the ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success. '},
    { info : ' Personal development for life ',
      info_2 : `Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help them develop and grow into confident individuals. 

      An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide the young children. 
      
        
      
      A focus on the building blocks of education – literacy and numeracy- every advantage as the students’ progress through their education.The integrated curriculum helps students develop skills and understandings needed to meet the demands of high school while continuing to inspire a thirst for learning. The literacy-based program with the world class Scholastic’s Levelled Book Room provides an academic framework that encourages students to embrace and understand the connections between traditional subjects and the real world, and to become critical and reflective thinkers. `},
    { info : ' Our Approach –   ',
      info_2 : `Creating better opportunities for teacher-student planning and cooperative evaluation which leads to enhanced creative teaching and learning. Our process of learning and teaching comes from a fusion of knowledge with various activities, resources; and experiencing real-life situations for a solution-based approach. It also instils problem-solving, critical thinking and collaboration in and beyond the classroom. 

      We take a Student Centric approach with flexibility, innovation and other core values for essential life experiences. `},
  ];


  constructor() { }

  ngOnInit() {
  }

}
