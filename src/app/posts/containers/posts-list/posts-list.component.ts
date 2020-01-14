import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsFacade } from '../../posts.facade';
import Post from '../../models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() posts$: Post[];
  isUpdating$: Observable<boolean>;

  constructor(private _postsFacade: PostsFacade) {
    this.isUpdating$ = _postsFacade.isUpdating$();
  }

  ngOnInit() {
    this._postsFacade.posts$.subscribe(posts => {
      this.posts$ = posts;
    });
  }
}
