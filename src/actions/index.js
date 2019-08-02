export const FETCH_POSTS="FETCH_POSTS"
export const REMOVE_POST="REMOVE_POST"


export const fetchPosts=value=> {

    return {
        type:FETCH_POSTS,
        payload:value
    }
   
        
}
export const removePost=blog=> {

    return {
        type:REMOVE_POST,
        payload:blog
    }
   
        
}
