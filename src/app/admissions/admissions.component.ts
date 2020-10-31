import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {
  closeResult = '';
  model: NgbDateStruct;
  constructor(private modalService: NgbModal,) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ehtos = [{
    title:`The safe and positive environment (Safety isn’t expensive, it's priceless):`,
  },
  {
    title:`Learn about our beliefs: Our Parent Relationship Managers will contact you to give you more details`,
  },
  {
    title:`School Tour: Visit our campus or join our online demo classes`,
  }
]

ehtos2 = [{
  title:`Meet the Principal: Connect with our principal with your child. This stage might include an assessment depending on the class`,
},
{
  title:`Interview with the Academic Team`,
},
{
  title:`6.	Admission : Once approved you will be directed to complete the admission formalities`,
}
]

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
      title: `Admission Process `,
      bar: 'pp0',
      description: `Activity Based Learning 
for 5 years`,
    },
    {
      title: 'Admission Criteria',
      bar: 'pp1',
      description: `Discovery, Play and Interactive 
Classroom learning 
for 3 years`,
    },
    {
      title: 'Fees - Link it to Enquiry form',
      bar: 'pp2',
      description: `Experiential learning in 
Mathematics, Science, Arts, etc. 
for 3 years`,
    },
    {
      title: 'Download Admission Forms ',
      bar: 'pp3',
      description: `Flexibility in choice of subjects 
with multidisciplinary study 
for 4 years`,
    }
  ];



  ngOnInit() {
  }

}
