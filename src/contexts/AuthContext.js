import { createContext, useContext, useState } from "react";

import * as authSercive from "../api/authApi";
import { addAccessToken } from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (input) => {
    // axios.post('')

    //response token(มีข้อมูลคนนั้นอยู่ในนั้น) กลับมา
    const res = await authSercive.register(input);
    setUser(true);
    addAccessToken(res.data.token);
  };
  return (
    <AuthContext.Provider value={{ user, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
