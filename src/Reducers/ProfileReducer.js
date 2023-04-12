const initialState = {
    image:""
}


const ProfileReducer = (state=initialState,action)=>{

    switch(action.type){
        case 'UPDATE_PROFILE':
            return{
                ...state,
                image:action.profile
            }
        default:
            return state
    }
}


export default ProfileReducer