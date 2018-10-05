import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">LOGO</div>
          </div>
          <Link to="/the_team">
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">The Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
