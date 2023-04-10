const initialState = {
    username:'',
    email:'',
    phone:'',
    password:''

};


const signupReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'UPDATE_FIELD':
            return{
                ...state,
                [action.field]:action.value,
            };

        case 'SUBMIT_FORM':

            return state;

        default:
            return state;
    }
}


export default signupReducer;