import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostItem = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )
  console.log(postId)

  return (
    <section className="singlepost-wrapper">
      <Link to="/" className="button muted-button singlepost-back-btn">
        Back to Posts
      </Link>
      {post ? (
        <article className="post">
          <h2>{post.title}</h2>

          <p className="post-content">{post.content}</p>
          <PostAuthor userId={post.userId} />
          <br />
          <TimeAgo timeStamp={post.date} />
          <Link to={`/posts/${post.id}/editPost`} className="button">
            Edit Post
          </Link>
        </article>
      ) : (
        <h2>Post not found!</h2>
      )}
    </section>
  )
}

export default PostItem
