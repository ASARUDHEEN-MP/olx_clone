const initialState = {
    email:"",
    password:"" 
}


const AdminLoginReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADMIN_LOGIN':
            return{
                ...state,
                [action.field]:action.value
            }
        default:
            return state
    }
}


export default AdminLoginReducer