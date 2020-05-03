import { RouterModule, Routes } from '@angular/router';
import { IndividuComponent } from './individu/individu.component';

const APP_ROUTING: Routes = [
  { path: 'individu', component: IndividuComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
