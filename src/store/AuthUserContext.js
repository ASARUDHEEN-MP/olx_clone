import { createContext } from "react";
import { useState } from "react";

const AuthUserContext = createContext(null)



export function AuthProvider(props) {
    const [user, setUser] = useState("");
  
    return (
      <AuthUserContext.Provider value={{ user, setUser }}>
        {props.children}
      </AuthUserContext.Provider>
    );
  }

export default AuthUserContext
