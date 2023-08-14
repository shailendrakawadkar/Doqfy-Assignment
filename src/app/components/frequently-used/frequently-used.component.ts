import { Component } from '@angular/core';
import { FrequentlyUsed } from 'src/app/models/frequentlyUsed';

@Component({
  selector: 'app-frequently-used',
  templateUrl: './frequently-used.component.html',
  styleUrls: ['./frequently-used.component.css']
})
export class FrequentlyUsedComponent {
  frequentlyUsedOptions : FrequentlyUsed[] = [
    {Title : "Contract Execution Upload", Subtitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", Url : ""}, 
    {Title : "E-Stamp Services", Subtitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", Url : ""}, 
    {Title : "E-Sign Services", Subtitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", Url : ""}]
}
