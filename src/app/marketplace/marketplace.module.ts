import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [HomeComponent, CartComponent],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
  ]
})
export class MarketplaceModule { }
