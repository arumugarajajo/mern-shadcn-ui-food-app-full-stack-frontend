import { Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/login" element={<span>Login page</span>} />
      <Route path="/logindemo" element={<span>Demo page</span>} />
    </Routes>
  );
};

export default AppRoutes;