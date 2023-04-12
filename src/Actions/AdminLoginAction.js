export const updateAdminLogin = (field,value)=>{
    return{
        type:"ADMIN_LOGIN",
        field,
        value
    }
}