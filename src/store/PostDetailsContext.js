import { createContext, useState } from "react";

const PostDetailsContext = createContext(null)


export function PostDetailProvider(props){

    const[post,setPost] = useState([])

    return(
    <PostDetailsContext.Provider value={{post,setPost}}>
        {props.children}
    </PostDetailsContext.Provider>
    )
}


export default PostDetailsContext