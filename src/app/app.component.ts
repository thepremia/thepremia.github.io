import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'premia';

  constructor(private router: Router) {

    this.router.events.subscribe(routerEvent => {
        if (routerEvent instanceof NavigationStart) {
            if (routerEvent.url === '/') {
                this.router.navigate(['/PrmiaPartner'], {skipLocationChange: true});
            }
        }
        if (this.router.url === '/Home') {
          document.body.classList.add('main-page');
        } else {
          document.body.classList.remove('main-page');
        }
    });
}

knowMore = function(text) {
  if(text == 'culture'){
    this.router.navigateByUrl('/TheStudyCulture', {skipLocationChange: true});
  }else if(text == 'edge'){
    this.router.navigateByUrl('/ThePremianEdge', {skipLocationChange: true});
  }

};

ngOnInit() {
  AOS.init();
}
}
