import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component'
import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { AlbumDeatailComponent } from './album-deatail/album-deatail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDeatailComponent
  }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
