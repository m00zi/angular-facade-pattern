export interface Post {
  id?: number | string;
  userId: number;
  title: string;
  body: string;
}

export function createPost(params: Partial<Post>) {
  return { } as Post;
}
