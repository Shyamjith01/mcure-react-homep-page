import { Typography } from "@mui/material";
import React from "react";
import "./logo.scss"
import logoLine from "../../public/Home/logo-line.svg";

const Logo = () => {
  return (
    <Typography
      variant="span"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 2,
        display: "flex",
        alignItems: "inherit",
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
        position: "relative" 
      }}
    >
      <span style={{ fontSize: "37px"}}>m</span>
      <img src={logoLine} className="logo-line" alt="" />
      <span className="logo-text">Cure</span>
    </Typography>
  );
};

export default Logo;
