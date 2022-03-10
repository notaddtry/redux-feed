import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostList = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  const orderedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <ul>
      <h3>Posts</h3>
      {orderedPosts.map((post) => (
        <li key={post.id}>
          <article className="post-excerpt" key={post.id}>
            <div className="post-title">
              <h3>{post.title}</h3>
              <TimeAgo timeStamp={post.date} />
            </div>
            <PostAuthor userId={post.userId} />
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
              View post
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default PostList
