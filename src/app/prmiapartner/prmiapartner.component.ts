import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prmiapartner',
  templateUrl: './prmiapartner.component.html',
  styleUrls: ['./prmiapartner.component.scss']
})
export class PrmiapartnerComponent implements OnInit {

  partners = [{
    name : 'Creya',
    title : 'Design Thinking',
    des : `Design thinking is implemented at Premia Academy during the child's growing years using the mantra-Define, Discover, Dream, Design, Deliver and Debrief!`
  },
  {
    name : 'Metamorphosis',
    title : 'Design Thinking',
    des : `The A++ factors - Ask, Acquire, Analyze, Apply and Assess are the foundation of teaching Entrepreneurship at The Premia academy!`
  },
  {
    name : `Furtados School
    of Music`,
    title : 'Performing Art',
    des : `Did you know that music training helps develop
    areas of reasoning and language training?
    That apart, music brings the world together.`
  },
  {
    name : 'Yardstick',
    title : 'Experiential Learning',
    des : `Experiences stitched together is what makes the perfect garment we call life. - this thought has inspired us to collaborate with Yardstick`
  },
  {
    name : `Scholastic
    levelled
    BookRoom`,
    title : 'Literacy Based Curriculum',
    des : `Our curriculum lays emphasis on reading as we believe the integences of language and the likes of speaking, creativity,`
  },
  {
    name : 'Swadhay',
    title : `Life Skills - Transforming
    lives to transform the world`,
    des : `Did you know that music training helps develop
    areas of reasoning and language training?
    That apart, music brings the world together.
    Music represents culture. `
  },
  {
    name : 'Sports village',
    title : '',
    des : `“The world is full of players, be a game changer!” MS Dhoni At the Premia Academy sports is a wholesome lesson in time management –`
  },
  {
    name : 'Avni  ',
    title : `Synchronicity, Sagacity
    and Sustainability`,
    des : `“The greatest threat to our planet is the belief that someone else will save it.” Robert Swan We will not let this be…Everyone can do simple things to make a difference and every little bit counts - stella ma-Cartney`
  },
]

  constructor() { }

  ngOnInit() {
  }

}
