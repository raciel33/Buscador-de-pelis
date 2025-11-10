import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  //ordenar productos
  public sort_by= 'Defecto';

  public title= ''


  constructor(){
    this.filter_title()
  }

filter_title(){
  console.log(this.title);
}



orden_por(){}

}
