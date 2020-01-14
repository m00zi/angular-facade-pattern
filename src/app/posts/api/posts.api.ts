import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from '../../lib/network.service';

import Post from '../models/post.model';

@Injectable()
export class PostsAPI {
    readonly API_URL = 'https://jsonplaceholder.typicode.com';
    readonly POSTS = '/posts';

    // Lifecycle
    constructor(private _network: NetworkService) { }

    // API Methods
    getAllPosts(): Observable<Post[]> {
        return this._network.get<Post[]>(this.API_URL, this.POSTS);
    }
}
