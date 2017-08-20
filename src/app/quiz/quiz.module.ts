import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { SharedModule } from '../shared';

const quizRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: QuizComponent,
  }
]);

@NgModule({
  imports: [
    quizRouting,
    SharedModule
  ],
  declarations: [
    QuizComponent
  ],
  providers: [
  ]
})
export class QuizModule {}
