import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookBook';
  recipesClicked = true;
  onNavigate(event: boolean) {
    this.recipesClicked = event;
  }
}
