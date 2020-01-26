import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PostsStore } from './posts.store';
import { Post } from './post.model';
import { tap } from 'rxjs/operators';
import { PostsAPI } from '../api/posts.api';
import { PostsQuery } from './posts.query';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private postsStore: PostsStore,
              private postsAPI: PostsAPI) { }

  get() {
    return this.postsAPI.getAllPosts().pipe(tap(posts => this.postsStore.set(posts)));
  }

  add(post: Post) {
    this.postsAPI.createPost(post).subscribe(response => {
      if (response.id) {
        post.id = response.id;
        this.postsStore.add(post, { prepend: true });
      }
    });
  }

  update(id, post: Partial<Post>) {
    this.postsStore.update(id, post);
  }

  remove(id: ID) {
    this.postsStore.remove(id);
  }
}
