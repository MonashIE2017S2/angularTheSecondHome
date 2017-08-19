import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AlertModule } from 'ngx-bootstrap';
import { DataService } from './visualization/data.service';
import {VisualizationModule} from './visualization/visualization.module';


import {
  ApiService,
  FooterComponent,
  HeaderComponent,
  SharedModule,
} from './shared';
import {RouteModule} from './app.route';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

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
    AlertModule.forRoot()
  ],
  providers: [
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
