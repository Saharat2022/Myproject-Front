import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../layout/auth/AuthLayout";

import FirstPage from "../pages/FirstPage";
import LoginPages from "../pages/LoginPages";
import RegisterPage from "../pages/RegisterPage";

function Rounter() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout user={user} />}>
            <Route path="user" element={<FirstPage />} />
            <Route path="*" element={<h1>404! This page is not found!!</h1>} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<FirstPage />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<h1>404! This page is not found!!</h1>} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default Rounter;
