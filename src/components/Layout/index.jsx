import React from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";

const Layout = (props) => {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/"
          ? `ph4-ns ph-2 layout-wrapper wallpaper-bg`
          : `ph4-ns ph-2 layout-wrapper wallpaper-css`
      }
    >
      {props.children}
    </div>
  );
};
export default Layout;
