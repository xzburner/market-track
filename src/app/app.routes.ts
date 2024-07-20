import { Routes } from '@angular/router';
import { MarketComponent } from './pages/main/market/market.component';

export const routes: Routes = [
  { path: '',
    redirectTo: 'market',
    pathMatch: 'full'
  },
  {
    path: 'market',
    component: MarketComponent,
  }
];
