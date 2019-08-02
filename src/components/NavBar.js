import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand">
                 Blogs
            </Link>
            <Link to="/create" className="navbar-brand">
                Create Blog
            </Link>
           
          </nav>
        )
    }
}
