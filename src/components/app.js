import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import PostList from "./PostList"
import CreatePost from "./CreatePost"
import NavBar from "./NavBar"
import ShowPost from "./ShowPost"


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
        <Route path="/" exact component={PostList}></Route>
        <Route path="/create" exact component={CreatePost}></Route>
        <Route path="/show:id" exact component={ShowPost}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}
