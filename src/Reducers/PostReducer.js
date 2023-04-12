const initialState = {
    post:[]
}



const PostReducer = (state=initialState,action)=>{

 switch(action.type){

    case 'UPDATE_POST_DET':
        return{
            ...state,
            post:action.post
        }

    default:
        return state
            

        }
}



export default PostReducer