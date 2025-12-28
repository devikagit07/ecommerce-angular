import { Routes } from '@angular/router';

import { Product } from './product/product';
import { SingleviewList } from './singleview-list/singleview-list';
import { ProductDetail } from './product-detail/product-detail';

import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Separate Pages
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  // Products (Full Screen Working Page)
  { path: 'product', component: Product },

  // Already working pages (DON'T TOUCH)
  { path: 'singleview-list/:id', component: SingleviewList },
  { path: 'product-detail/:id', component: ProductDetail },

  { path: '**', redirectTo: '/home' }
];