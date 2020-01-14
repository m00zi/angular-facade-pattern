import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import Post from '../models/post.model';

@Injectable()
export class PostsState {
    private _updating$ = new BehaviorSubject<boolean>(false);
    private _posts$ = new BehaviorSubject<Post[]>(null);

    // Updating flag state
    isUpdating$() {
        return this._updating$;
    }

    setUpdating(isUpdating: boolean) {
        this._updating$.next(isUpdating);
    }

    // Posts
    getAllPosts$(): Observable<Post[]> {
        return this._posts$.asObservable();
    }

    setAllPosts(posts: Post[]) {
        this._posts$.next(posts);
    }
}
