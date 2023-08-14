import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {

  formattedDate!: string;

  constructor() { 
    this.formattedDate = this.formatDateWithDay(new Date());
  }

  formatDateWithDay(date: Date): string {
    return date.toLocaleDateString('en-US', {year : 'numeric', month : 'long', day : 'numeric', weekday : 'long'});
  }
}
