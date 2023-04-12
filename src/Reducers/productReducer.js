const initialstate ={
    product:[]
}

const productReducer = (state=initialstate,action)=>{
    switch(action.type){
        case 'UPDATE_PRODUCT':
            return{
                ...state,
                product:action.product
            }
        
        default:
            return state
    }

}



export default productReducer