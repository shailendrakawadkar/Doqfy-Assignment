import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.css']
})
export class CountCardComponent implements OnInit {
  
  @Input('Title') Title! : string;
  @Input('Initiated') Initiated! : Number;
  @Input('Pending') Pending! : Number;
  @Input('Signed') Signed! : Number;
  @Input('Expired') Expired! : Number;

  data : any;
  options : any;

  ngOnInit(): void {
    this.options = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'left',
          labels : {
            boxWidth : 12,
            textAlign : 'left'
          }
        },
        customCanvasBackgroundColor: {
          color: 'lightGreen',
        },
        tooltip: {
          backgroundColor: '#36365C',
          titleColor: 'white',
        },
      },
    };
  
    this.data = {
      labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
      datasets: [
        {
          data: [this.Initiated, this.Pending, this.Signed, this.Expired],
          backgroundColor: ['#E6E6EA', '#B271ED', '#612F87', '#EBD1FD'],
          //hoverBackgroundColor: ['red', 'red', 'red', 'red']
        },
      ],
    }; 
  }
}
