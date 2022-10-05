import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../component/ui/Spinner";
import * as authSercive from "../api/authApi";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [initialLoading, setInitialLoading] = useState(true);

  //ทุกครั้งที่รีเฟชรหน้า
  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
        }
      } catch (err) {
        //responsr only 500 ถึงจะเข้าตรงนี้
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authSercive.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    // axios.post('')

    //response token(มีข้อมูลคนนั้นอยู่ในนั้น) กลับมา
    const res = await authSercive.register(input);
    addAccessToken(res.data.token);
    setTimeout(async () => {
      await getMe();
    }, 1000);
    //ใส่ getMe เเล้วลบ setUser(true);ทิ้งได้เลย
    // setUser(true);
  };

  const login = async (input) => {
    const res = await authSercive.login(input);
    addAccessToken(res.data.token);
    // await getMe();
    setTimeout(() => {
      getMe();
    }, 1000);
    //ใส่ getMe เเล้วลบ setUser ทิ้งได้เลย
    // setTimeout(() => setUser(true), 1000);
  };
  const logout = () => {
    setUser(null);
    navigate("/");
    removeAccessToken();
  };

  if (initialLoading) return <Spinner />;
  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
