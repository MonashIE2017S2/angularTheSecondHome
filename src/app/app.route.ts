import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {VisualizationComponent} from './visualization/visualization.component';
import {AboutComponent} from './about/about.component';
import {QuizComponent} from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'visualization', component: VisualizationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class RouteModule { }
