import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux"
import {fetchPosts} from "../actions"
import {Link} from "react-router-dom"

 class CreatePost extends Component {
     renderList=props=>{
         return (
            <div className="form-group ">
            <label forhtml="exampleInputTitle">{props.label}</label>
            <input {...props.input} type="text" className="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder={props.label}/>
           <span className="text-danger">{props.meta.touched && props.meta.error?"This place cant be empty":undefined}</span>
          </div>
         )
     }
    
   
     
   
    render() {
        let id=this.props.blogs.length+1;
        
        
       const alma=value=>{
            this.props.fetchPosts(value)
            this.props.history.push("/")
            
        }
      
       
        
            const { handleSubmit, pristine, reset, submitting,valid} = this.props
            
            return (
                <form onSubmit={handleSubmit(alma)} className="mt-5">
                    <Field label="Title" validate={validate} name="title" component={this.renderList}/>
                    <Field label="Content" validate={validate} name="content" component={this.renderList}/>
                <button type="submit" disabled={!valid} className="mr-1 btn btn-primary">Submit</button>
                <Link to="/">
                <button type="submit" className="ml-1 btn btn-danger">Cancel</button>
                </Link>
                
              </form>
            )
          }
}

const validate=v=>{
    if(!v || v.title==="") {
        return "sad"
    }
    else {
        return undefined
    }
 
}
const mapStateToProps=state=>{
    return {
        blogs:state.datas
    }
}
const xiyar=connect(mapStateToProps,{fetchPosts})(CreatePost)

 export default reduxForm({
     validate,
    form: 'change_password_form',
  })(xiyar)