import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce.UI';

  constructor(private el: ElementRef) { }
  ngOnInit(): void {

    let alldrpdwn = document.querySelectorAll('.dropdown-container')
    alldrpdwn.forEach((item: any) => {
      const a = item.parentElement?.querySelector('a:first-child');
      a.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.el.nativeElement.classList.toggle('active');
        item.classList.toggle('show');
      });
    });
  }

resposiveMenu:any;
resposiveContent:any;
defaultStatus=true;
  openNav(status:any)
  {
    if(status===this.defaultStatus)
    {   
      this.resposiveMenu = {
      'display':'block'
    }
    this.resposiveContent={
      'margin-left':'150px'
    }
    this.defaultStatus = false;
  }
  else{
    this.resposiveMenu = {
      'display':null
  }
  this.resposiveContent={
    'margin-left':null
  }
  this.defaultStatus = true;
  }
}
}
