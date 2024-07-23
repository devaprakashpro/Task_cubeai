import React from "react";
import "./Header.css";
import Stack from "@mui/material/Stack";
import { useAuth } from "../AuthContext";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useAuth();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        {user && <h1>Hello {user.firstName}</h1>}
        <nav>
          <ul>
            <li>
              <a href="#home" className="btn">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="btn">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="btn">
                Contact
              </a>
            </li>
            <li>
              <a href="#protects" className="btn">
                Protects
              </a>
            </li>
            <li>
              <a href="" className="btn btn-primary" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
