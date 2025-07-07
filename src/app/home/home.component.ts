import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  darkMode:boolean= true

  sidebar_menu(){
$("#sides-bar").toggleClass('sidebar-hidden')
 }
 changemode() {
  if ($("#sides-bar").hasClass("dark-mode")) {
    $("#sides-bar").removeClass("dark-mode");
    this.darkMode= false
  } else {
    $("#sides-bar").addClass("dark-mode");
    this.darkMode= true

  }
}

}
