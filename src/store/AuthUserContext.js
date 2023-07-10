import { createContext } from "react";
import { useState } from "react";

const AuthUserContext = createContext(null)



export  function AuthProvider({children}) {
    const [user, setUser] = useState("");
  
    return (
      <AuthUserContext.Provider value={{user,setUser}}>
        {children}
      </AuthUserContext.Provider>
    );
  }

export default AuthUserContext
