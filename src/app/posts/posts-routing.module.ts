import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PostsListComponent } from './containers/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';

const postsRoutes: Routes = [
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
