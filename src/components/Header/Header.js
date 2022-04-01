import React from "react";
import CustomLink from "../customLInk/customLink";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my fancy routing website!</h1>
      <nav>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/friends">Friends</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
