import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {

  constructor() { }
  
  admission = [
    {
      icon: '#icon_ethicalEdu',
      description: `Ethical
      Education`,
    },
    {
      icon: '#icon_nurturing',
      description: `Nurturing
      Individual
      Passion`,
    },
    {
      icon: '#icon_community',
      description: `Building
A Community`,
    }
  ];

  admission_2 = [
    {
      title: `Admission
to Nursery`,
      bar:'pp0',
      description: `The child will have to 
be 2 years 6 months as 
on 1st June 2020 `,
    },
    {
      title: 'Admission to PP 1',
      bar:'pp1',
      description: `The child needs to be 3 
years 6 months as on
1st June 2020`,
    },
    {
      title: 'Admission to PP 2',
      bar:'pp2',
      description: `The child needs to be 4
years 6 months as on 1st 
June 2020`,
    },
    {
      title: 'Grade 1',
      bar:'pp3',
      description: `The child needs to be 5 
years 6 months as on 1st 
June 2020`,
    }
  ];



  ngOnInit() {
  }

}
