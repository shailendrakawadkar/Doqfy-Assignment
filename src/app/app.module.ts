import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { WalletCardComponent } from './components/wallet-card/wallet-card.component';
import { PendingActionsComponent } from './components/pending-actions/pending-actions.component';
import { FrequentlyUsedComponent } from './components/frequently-used/frequently-used.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ChartModule } from 'primeng/chart';
import { CountCardComponent } from './components/count-card/count-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeCardComponent,
    WalletCardComponent,
    PendingActionsComponent,
    FrequentlyUsedComponent,
    OrderDetailsComponent,
    CountCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    NgbModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
