const initialState ={
    name:"",
    category:"",
    price:"",
    image:""
}



const CreateFormReducer=(state=initialState,action)=>{

    switch(action.type){


        case 'UPDATE_CREATE_FORM':

        return{
            ...state,
            [action.field]:action.value
    }

        default:
            return state
}

}


export default CreateFormReducer