import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authSercive from "../api/authApi";
import { addAccessToken, removeAccessToken } from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const register = async (input) => {
    // axios.post('')

    //response token(มีข้อมูลคนนั้นอยู่ในนั้น) กลับมา
    const res = await authSercive.register(input);
    setUser(true);
    addAccessToken(res.data.token);
  };

  const login = async (input) => {
    const res = await authSercive.login(input);
    setTimeout(() => setUser(true), 1000);
    addAccessToken(res.data.token);
  };
  const logout = () => {
    setUser(null);
    navigate("/");
    removeAccessToken();
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
