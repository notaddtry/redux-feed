import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostItem from './components/posts/PostItem'
import PostList from './components/posts/PostList'
import AddPostForm from './components/posts/AddPostForm'
import EditPostForm from './components/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostList />
              </>
            )}
          />
          <Route exact path="/posts/:postId" component={PostItem} />
          <Route
            exact
            path="/posts/:postId/editPost"
            component={EditPostForm}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
