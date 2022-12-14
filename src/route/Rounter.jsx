import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ProfileContainer from "../features/profile/ProfileContainer";
import AuthLayout from "../layout/auth/AuthLayout";
import AdminCategory from "../pages/AdminCategory";
import Contact from "../pages/Contact";
import CoursePage from "../pages/CoursePage";
import FirstPage from "../pages/FirstPage";
import LoginPages from "../pages/LoginPages";
import OurPage from "../pages/OurPage";
import RegisterPage from "../pages/RegisterPage";
import CreateCategoryPage from "../pages/CreateCategoryPage";
import DetailCourse from "../pages/DetailCourse";

function Rounter() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<FirstPage />} />
        <Route path="our" element={<OurPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/course/:id" element={<DetailCourse />} />

        {user ? (
          user.role === "user" ? (
            <>
              <Route path="user/editprofile" element={<ProfileContainer />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="admin/course" element={<AdminCategory />} />
              {/* <Route path="admin/portfolio" element={<AdminPortfolio />} /> */}
              <Route
                path="admin/createcategory"
                element={<CreateCategoryPage />}
              />

              <Route path="*" element={<Navigate to="/" />} />
            </>
          )
        ) : (
          <>
            <Route path="login" element={<LoginPages />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default Rounter;
