import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {


  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  tab4 : any
  Clicked : boolean
  
 



    onClick(check){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }else{
          this.tab = 'tab4';
        }    
      
    }

   onSwitch(check){
 
     switch (check) {
      case 1:
        return 'tab1';
      case 2:
        return 'tab2';
      case 3:
        return 'tab3';
        case 4:
          return 'tab4';
    }

}
  curSlider = [
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
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
