import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom modules
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Akita
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),

    // Dependency modules
    BrowserModule,
    AppRoutingModule,

    // Custom modules
    HomeModule,
    PostsModule
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'https://jsonplaceholder.typicode.com'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
