const initialState ={
    email:'',
    password:''

}



const signinReducer = (state=initialState,action)=>{
    switch(action.type){

        case 'UPDATE_FIELD':
            return{
                ...state,
                [action.field]:action.value
            }
        
        default:
            return state

    }
}

export default signinReducer