import { Routes } from '@angular/router';
import { IndexesComponent } from './pages/main/market/indexes/indexes.component';
import { MarketComponent } from './pages/main/market/market.component';

export const routes: Routes = [
  { path: '',
    redirectTo: 'market',
    pathMatch: 'full'
  },
  {
    path: 'market',
    component: MarketComponent,
  },
  {
    path: 'market/indexes',
    component: IndexesComponent,
  },
];
