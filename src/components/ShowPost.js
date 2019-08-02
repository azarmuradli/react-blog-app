import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchPosts,removePost} from "../actions"

 class ShowPost extends Component {
    
    render() {
        let id=parseInt(this.props.match.params.id)
        let blog=this.props.blogs[0]
        const onBtnCLick=()=>{
            this.props.removePost(blog)
            this.props.history.push("/")
        }
        
        return (
            <div className="container mt-4">
              <h1>{blog.title}</h1>
              <h4>{blog.content}</h4>
              <button onClick={onBtnCLick} className="mt-5 btn btn-danger">Remove Blog</button>
            </div>
        )
    }
}
const mapStateToProps=state=>{    
    return {
        blogs:state.datas
    }
}
export default connect(mapStateToProps,{fetchPosts,removePost})(ShowPost)
