import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { PostsAPI } from './api/posts.api';
import { PostsState } from './state/posts.state';
import Post from './models/post.model';

@Injectable()
export class PostsFacade {
    // Lifecycle
    constructor(private _postsAPI: PostsAPI, private _postsState: PostsState) { }

    // Methods
    isUpdating$(): Observable<boolean> {
        return this._postsState.isUpdating$();
    }

    loadPosts$(): Observable<Post[]> {
        return this._postsAPI.getAllPosts()
            .pipe(tap(posts => this._postsState.setPosts(posts)));
    }

    getPostById(postId: number) {

    }

    createPost(post: Post) {

    }
}
