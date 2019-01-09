import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  @Output() featureSelected: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    if(feature == "recipe") {
      this.featureSelected.emit(true);
    } else {
      this.featureSelected.emit(false);
    }
    
  }
}
