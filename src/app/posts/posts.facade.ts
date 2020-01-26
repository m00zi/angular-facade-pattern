import { Injectable } from '@angular/core';
import { PostsService } from './state/posts.service';
import { Post } from './state/post.model';
import { PostsQuery } from './state/posts.query';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
    posts$ = this.postsQuery.selectAll();

    constructor(private postsQuery: PostsQuery,
                private postsService: PostsService) {
        this.postsService.get().subscribe(_ => console.log('Success'));
    }

    addPost(post: Post) {
        this.postsService.add(post);
    }

    removePost(post: Post) {
        this.postsService.remove(post.id);
    }
}
