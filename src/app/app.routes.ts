import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'why-us',
    loadComponent: () => import('./why-us/why-us.page').then( m => m.WhyUsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
];