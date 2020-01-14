import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom modules
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Dependency modules
    BrowserModule,
    AppRoutingModule,

    // Custom modules
    HomeModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
