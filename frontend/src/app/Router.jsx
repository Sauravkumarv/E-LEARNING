import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/pages/auth/Login";
import Signup from "../features/auth/pages/auth/Signup";
import { ROUTES } from "../config/routes.config";
import HomePage from "../features/auth/pages/home/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signup} element={<Signup />} />
        <Route path={ROUTES.home} element={<HomePage/>} />
        
      </Routes> 
    </BrowserRouter>
  );
}
