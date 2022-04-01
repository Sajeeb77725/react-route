import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my fancy routing website!</h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
