import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../layout/auth/AuthLayout";
import Contact from "../pages/Contact";
import CoursePage from "../pages/CoursePage";

import FirstPage from "../pages/FirstPage";
import LoginPages from "../pages/LoginPages";
import OurPage from "../pages/OurPage";
import PortFolio from "../pages/PortFolio";
import RegisterPage from "../pages/RegisterPage";
import StepApply from "../pages/StepApply";

function Rounter() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<AuthLayout user={user} />}>
        <Route path="" element={<FirstPage />} />
        <Route path="our" element={<OurPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="portfolio" element={<PortFolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="stepapply" element={<StepApply />} />
        {user ? (
          <>
            <Route path="*" element={<h1>404! This page is not found!!</h1>} />
          </>
        ) : (
          <>
            <Route path="login" element={<LoginPages />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<h1>404! This page is not found!!</h1>} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default Rounter;
