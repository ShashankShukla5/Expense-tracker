import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Home, Login } from "./components";
import { useEffect } from "react";
import appwriteAuth from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin, logout } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const startLoad = async () => {
      const user = await appwriteAuth.getCurrentUser();
      if (user) {
        dispatch(authLogin(user));
        navigate("/expenses");
      } else {
        dispatch(logout());
      }
    };
    startLoad();
  }, []);
  return <Outlet />;
}

export default App;
