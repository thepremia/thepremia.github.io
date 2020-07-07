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
to Pre-Primary`,
      bar:'pp0',
      description: `The child will have to 
be 2 years 6 months as 
on 1st June 2020 `,
    },
    {
      title: 'Admission to Primary',
      bar:'pp1',
      description: `The child needs to be 3 
years 6 months as on
1st June 2020`,
    },
    {
      title: 'Admission to Middle School',
      bar:'pp2',
      description: `The child needs to be 4
years 6 months as on 1st 
June 2020`,
    },
    {
      title: 'Admission to High School',
      bar:'pp3',
      description: `The child needs to be 5 
years 6 months as on 1st 
June 2020`,
    }
  ];



  ngOnInit() {
  }

}
