import { Routes } from '@angular/router';

import { BlueBoxComponent } from './blue-box.component';
import { ChatComponent } from './chat.component';
import { HomeComponent } from './home.component';
import { NameComponent } from './name.component';
import { TaskComponent } from './task.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello/:name', component: NameComponent },
  { path: 'blue', component: BlueBoxComponent },

  { path: 'chat', component: ChatComponent, outlet: 'side' },
  { path: 'task', component: TaskComponent, outlet: 'side' }
];
