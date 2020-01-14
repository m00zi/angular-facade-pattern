import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { PostsAPI } from './api/posts.api';
import { PostsState } from './state/posts.state';
import Post from './models/post.model';

@Injectable()
export class PostsFacade {
    private _posts$: Observable<Post[]>;
    get posts$(): Observable<Post[]> {
        return this._posts$;
    }

    private _updating$: Observable<boolean>;
    set updating(isUpdating: boolean) {
        this._updating$ = new Observable<boolean>();
    }

    // Lifecycle
    constructor(private _postsAPI: PostsAPI, private _postsState: PostsState) {
        this._posts$ = this._postsAPI.getAllPosts().pipe(shareReplay(1));
    }

    // Methods
    isUpdating$(): Observable<boolean> {
        return this._updating$;
    }

    getPostById(postId: number) {

    }
}
