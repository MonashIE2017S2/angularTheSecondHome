import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { SharedModule } from '../shared';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AboutComponent,
  }
]);

@NgModule({
  imports: [
    aboutRouting,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ]
})
export class AboutModule {}
