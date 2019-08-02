import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchPosts} from "../actions"
import {Link} from "react-router-dom"

 class PostList extends Component {
    render() {
        return (
            <ul className="list-group mt-5">
                {this.props.blogs.map((blog,index)=>{
                    return <li key={index} className="list-group-item">
                   <Link to={`/show${index}`}>
                    {blog.title}
                    </Link>
                    </li>
                })}
           </ul>
        )
    }
}

const mapStateToProps=state=>{
    
   return {
       blogs:state.datas
   }
    
}

export default connect(mapStateToProps)(PostList)