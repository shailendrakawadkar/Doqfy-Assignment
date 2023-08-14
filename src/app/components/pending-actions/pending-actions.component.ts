import { Component } from '@angular/core';
import { PendingActons } from 'src/app/models/pendingAction';

@Component({
  selector: 'app-pending-actions',
  templateUrl: './pending-actions.component.html',
  styleUrls: ['./pending-actions.component.css']
})
export class PendingActionsComponent {
  pendingActions : PendingActons[] = [
    {Id : "#trd35468", Days : "10 days left", Files : 2}, 
    {Id : "#33255577", Days : "10 days left", Files : 2}, 
    {Id : "#70298347", Days : "10 days ago", Files : 2}]
}
