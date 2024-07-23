import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage"; // Assuming you have this page
import Landingpage from "./Landingpage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./AuthContext";
// // Import MDB CSS
// import "mdb-ui-kit/css/mdb.min.css";
// // Import MDB JavaScript
// import "mdb-ui-kit/js/mdb.min.js";

const App = () => (
  <AuthProvider>
    <Router>
      {/* <ToastContainer /> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />{" "}
        {/* Add this route */}
      </Routes>

      <ToastContainer />
    </Router>
  </AuthProvider>
);

export default App;
