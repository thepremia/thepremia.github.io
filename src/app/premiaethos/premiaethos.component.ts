import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiaethos',
  templateUrl: './premiaethos.component.html',
  styleUrls: ['./premiaethos.component.scss']
})
export class PremiaethosComponent implements OnInit {

  

  constructor(private viewportScroller: ViewportScroller) { }

  ehtos = [{
    title:`The safe and positive environment (Safety isn’t expensive, it's priceless):`,
  },
  {
    title:`Growth & Innovation mindset (Empower & Inspire)-`,
  },
  {
    title:`Quest for 
    learning 
    (Lifelong 
    learners)`,
  },
  {
    title:`Integrity above all (Virtue in our veins)`,
  }
]

ehtos2 = [{
  title:`Passion
  (Finding
  your inner
  strength)`,
},
{
  title:`Purpose
  (The Driving
  force)`,
},
{
  title:`Prodigy
  (Miracles
  in making)`,
}
]

tab : any = 'tab1';
tab1 : any = 'tab2';
tab2 : any = 'tab3';
tab3 : any = 'tab4';
tab4 : any = 'tab5';
tab5 : any = 'tab6';
tab6 : any = 'tab7';
tab7 : any
tab8 : any 
tab9 : any
Clicked : boolean

onClick(check){
  this.viewportScroller.scrollToAnchor(check);
      if(check==1){
        this.tab = 'tab1';
      }else if(check==2){
        this.tab = 'tab2';
      }else if(check==3){
        this.tab = 'tab3';
      }else if(check==3){
        this.tab = 'tab4';
      }else if(check==4){
        this.tab = 'tab4';
      }else if(check==5){
        this.tab = 'tab5';
      }else if(check==6){
        this.tab = 'tab6';
      }else if(check==7){
        this.tab = 'tab7';
      }else if(check==8){
        this.tab = 'tab8';
      }else{
        this.tab = 'tab9';
      }    
  }

  ngOnInit() {
  }

}
