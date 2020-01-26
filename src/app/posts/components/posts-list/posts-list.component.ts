import { Component, OnInit } from '@angular/core';
import { Post } from '../../state/post.model';
import { PostsFacade } from '../../posts.facade';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$ = this.postsFacade.postsQuery.selectAll();

  constructor(private postsFacade: PostsFacade) { }

  ngOnInit() { }

  addPost() {
    const post: Post = {
      userId: 1,
      title: 'Hi there!',
      body: 'Testing a new post here.'
    };
    this.postsFacade.addPost(post);
  }

  removePost(post: Post) {
    this.postsFacade.removePost(post);
  }
}
