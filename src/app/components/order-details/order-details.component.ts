import { Component } from '@angular/core';
import { OrderDetail } from 'src/app/models/orderDetail';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  details : OrderDetail[] = [
    {Count : 18, Icon : "schedule", Status : "Total Orders", TrendingIcon : "trending_up", TrendingValue : "+2.4", TrendingIconColor : 'green'}, 
    {Count : 10, Icon : "schedule", Status : "In Progres", TrendingIcon : "trending_up", TrendingValue : "+2.4", TrendingIconColor : 'green'}, 
    {Count : 5, Icon : "schedule", Status : "Completed Order", TrendingIcon : "trending_up", TrendingValue : "+2.4", TrendingIconColor : 'green'}, 
    {Count : 3, Icon : "schedule", Status : "Cancelled Order", TrendingIcon : "trending_down", TrendingValue : "+2.4", TrendingIconColor : 'red'} 
    ]
}
