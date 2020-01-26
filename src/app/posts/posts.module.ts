import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { LibModule } from '../lib/lib.module';
import { PostsRoutingModule } from './posts-routing.module';

// Providers
import { NetworkService } from '../lib/network.service';
import { PostsFacade } from './posts.facade';
import { PostsAPI } from './api/posts.api';

// Components
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgbModule,
    LibModule
  ],
  providers: [
    NetworkService,
    PostsFacade,
    PostsAPI
  ]
})
export class PostsModule { }
