import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {RouteModule} from './app.route';

import { HomeModule } from './home/home.module';
import { AlertModule } from 'ngx-bootstrap';
import { DataService } from './visualization/data.service';
import { VisualizationModule } from './visualization/visualization.module';
import { AboutModule } from './about/about.module';
import { QuizModule } from './quiz/quiz.module';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    rootRouting,
    SharedModule,
    RouteModule,
    VisualizationModule,
    AboutModule,
    QuizModule,
    AlertModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
