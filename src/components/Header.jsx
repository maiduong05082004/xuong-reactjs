import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, onLogout }) => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/" className="no-underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="no-underline">About</Link>
        </li>
        <li>
          <Link to="/products" className="no-underline">Shop</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login" className="no-underline">Login</Link>
            </li>
            <li>
              <Link to="/register" className="no-underline">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-white">Welcome, {user.name}</li>
            <li>
              <button className="text-white" onClick={onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;