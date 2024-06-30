import React from 'react'
import User from './components/user/User'
import ArticleList from './components/user/ArticleList'
import AddList from './components/user/AddList'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <div>App
      {/* <User></User> */}
      <ArticleList></ArticleList>
      <AddList></AddList>
      {/* <Router>
        <div>
          <Switch>
            <Route path="/add-article">
              <AddList />
            </Route>
            <Route path="/">
              <ArticleList />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  )
}
