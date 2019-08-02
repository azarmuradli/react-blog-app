import {FETCH_POSTS} from "../actions"
import {REMOVE_POST} from "../actions"

const initialValues=[
  {
    title:"Lionel Messi",
    content:"He is the best goal scorer",
  },
  {
    title:"Yuval Noah Harari",
    content:"One of the best author of 21st century",
  },
  
]

export default (state=initialValues,action)=> {
  switch(action.type) {
    case REMOVE_POST:
      return [...state.filter(alma=>alma!==action.payload)]
      case FETCH_POSTS:
          return [...state,action.payload]
      default:
          return state
  }
}
