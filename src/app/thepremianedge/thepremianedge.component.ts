import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-thepremianedge',
  templateUrl: './thepremianedge.component.html',
  styleUrls: ['./thepremianedge.component.scss']
})
export class ThepremianedgeComponent implements OnInit, AfterViewInit {

  explicit = [{
    title: `Literacy`,
    icon: `#icon_ethicalEdu`,
    bar: '01',
    description: `Having introduced a thematic and literacy-based curriculum, Premia Academy has a
    levelled book room – a shared reading resource for successful whole-school learning, to
    designate the importance of guided reading and journal writing in our teachings.`,
    },
    {
      title: 'Mathematics',
      icon: `#icon_mathematics`,
      bar: '02',
      description: `The idea of introducing concepts for the application of mathematical terms in
      multiple, yet simple ways, serves as a strong base for future calculations with logic.
      Premia conceptualizes Mathematics in a well- researched, sequential series, enabling
      children to think out of the box and relate numeracy to everyday life. Topics are introduced
      using well-planned activities, developing mathematical thinking and problem-solving skills.
     `,
    },
    {
      title: 'The World (Experiential Learning)',
      icon: `#icon_worldEqu`,
      bar: '03',
      description: `Experiential learning is a process through which
      students develop knowledge, skills, and values from direct experiences outside a traditional
      academic setting. Experiential learning encompasses a variety of activities, hands-on
      learning, etc. Students can understand concepts with concrete experience and reflective
      observation.`,
    },
    {
      title: 'Expressive Arts and Design',
      icon: `#icon_expressiveArt`,
      bar: '04',
      description: `Premia helps children develop their imagination so they can
      express their ideas in a variety of individual ways within a stimulating learning
      environment. Expressive arts and design are intended to support learning and development for
      children.`,
    },
    {
      title: 'Technology and Innovations Lab',
      icon: `#icon_techinnvo`,
      bar: '05',
      description: `Our literacy-based curriculum emphasizes subjects through
      an inquiry-based, thematic, hands-on learning, driven by the goal of closely aligning
      programs that students will experience in and beyond the classroom. In today’s scenario
      where content knowledge is interconnected, our STREAM- Labs, mapped with the curriculum, are
      meticulously planned to deliver and enhance the learning process at Premia.`,
    }
  ];


  ngOnInit() {
  }

  ngAfterViewInit(){

  }

}
