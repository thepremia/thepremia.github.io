import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-prmiapartner',
  templateUrl: './prmiapartner.component.html',
  styleUrls: ['./prmiapartner.component.scss']
})
export class PrmiapartnerComponent implements OnInit {

  partners = [{
    name : 'Creya',
    id:'1',
    title : 'Design Thinking',
    des : `Design thinking is implemented at Premia Academy during the child's growing years using the mantra-Define, Discover, Dream, Design, Deliver and Debrief!`,
    des2:`This course utilizes the spatial and logical intelligences of a child in thinking critically, designing and innovating.
    Our association with Creya ensures childrens ideas see the light of day and you never know, it might just be revolutionary!
   `,
   link: `https://www.creyalearning.com/stem/`
  },
  {
    name : 'Metamorphosis',
    id:'5',
    title : 'Design Thinking',
    des : `The A++ factors - Ask, Acquire, Analyze, Apply and Assess are the foundation of teaching Entrepreneurship at The Premia academy!`,
    des2:`Our curriculum for  entrepreneurship fostering leadership, risk taking, team building and being a responsible Global Citizen is a platform where children use their intelligence of logical, intra & interpersonal, spatial and naturalistic skills where by they ideate, incubate and create business models.
    For this we have on board, metamorphosisedu, who have customized a first of its kind curriculum to nurture entrepreneurial skill-set from  the early years.`, 
    link: `http://www.metamor
    phosisedu.com`
  },
  {
    name : `Furtados School
    of Music`,
    id:'4',
    title : 'Performing Art',
    des : `Did you know that music training helps develop
    areas of reasoning and language training?
    That apart, music brings the world together.`,
    des2:`“Music is an inborn delight we all cherish; we just need a little push to realize this passion.” -  Furtados School of Music
    We couldn’t have asked for a better collaborator whose mission aligns with ours to fine tune the passion in our PREMIA PRIDE!
    `,
    link: `https://furtadosschoolofmusic.com`
  },
  {
    name : 'Yardstick',
    id:'6',
    title : 'Experiential Learning',
    des : `Experiences stitched together is what makes the perfect garment we call life. - this thought has inspired us to collaborate with Yardstick`,
    des2:`a globally acclaimed programme which provides tailor-made ‘experience kits’ for children where they use logical, spatial & naturalistic intelligences. We are glad to collaborate with a brand which, like us, believes in experiential learning`,
    link: ` http://www.yardstickedu.com`
  },
  {
    name : `Scholastic
    levelled
    BookRoom`,
    id:'7',
    title : 'Literacy Based Curriculum',
    des : `Our curriculum lays emphasis on reading as we believe the integences of language and the likes of speaking, creativity,story telling & writing skills are enhanced leading to better comprehension in all other areas of learning`,
    des2:`True to Kate DiCamillo’s words -Reading is not presented to our children as a chore, a duty. It is offered as a gift!.-And to our young readers and leaders, our PREMIA PRIDE, here’s the best present we could find - @Scholastic levelled BookRoom 4.0 The largest collection of books across genres, subjects and interests with Over 6,200 texts, 240 books per level, 60 Short Reads per level, 24/7 digital access with the Leveled Bookroom Accelerator. Need we say more? Yes, we do, because we are the only school in Hyderabad to have a campus powered with the Scholastic material.`,
    link: `http://teacher.scholastic.com/products/leveledbookrooms/index.htm`
  },
  {
    name : 'Swadhay',
    id:'_6',
    title : `Life Skills - Transforming
    lives to transform the world`,
    des : `Did you know that music training helps develop
    areas of reasoning and language training?
    That apart, music brings the world together.
    Music represents culture. `,
    des2:`The Experiential Awakening is a powerful platform built to nurture values, to empower change, to inculcate new habits, and to initiate a culture of innovation – things that matter most in life. The Future is more than we think. It is not just about being at the helm of a career, it is about how your presence makes a difference to the world. `
  },
  {
    name : 'Sports village',
    id:'3',
    title : '',
    des : `“The world is full of players, be a game changer!” MS Dhoni At the Premia Academy sports is a wholesome lesson in time management –`,
    des2:`“The world is full of players, be a game changer!” MS Dhoni
    At the Premia Academy sports is a wholesome lesson in time management – self-discipline, focus, resilience, grit - as they provide the spirit of competition in our students driving them to go the extra mile in other areas of their learning. The sports program curated by our partner, Sports Village, facilitates students to respect authority and  rules while building self esteem & mental alertness to reduce stress & anxiety.
   “Run when you can, walk if you have to, crawl if you must, just never give up.” Dean Karnazes. “It’s hard to beat a person who never gives up!” Babe Ruth
   `,
   link: `https://www.sportzvillage.com/schools/ `
  },
  {
    name : 'Avni  ',
    id:'2',
    title : `Synchronicity, Sagacity
    and Sustainability`,
    des : `“The greatest threat to our planet is the belief that someone else will save it.” Robert Swan We will not let this be…Everyone can do simple things to make a difference and every little bit counts - stella ma-Cartney`,
    des2:`The program focuses on equipping children with the why and how of conscious living. 
    ●	Sustainability - The Intent to ensure that our economic, environmental & social necessities doesn’t compromise the hope of our  future generations living in harmony with nature.
    ●	Sagacity-The intellect to make the right choices that's good for Our people and for Our planet
    ●	Synchronicity-The insight  to generate more equitable outcomes for people, place and the planet. A peaceful Co-existence is the only way forward!
    `
  },
]

  constructor(private viewportScroller: ViewportScroller) { }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  ngOnInit() {
  }

}
