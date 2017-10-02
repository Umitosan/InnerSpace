import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
