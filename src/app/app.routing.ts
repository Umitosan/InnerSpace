import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { AboutComponent } from './about/about.component';
import { ForumComponent } from './forum/forum.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
