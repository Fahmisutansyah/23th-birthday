import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Button = ({ className, link, onClick, disabled, text, icon }) => {
  return (
    <>
      {link ? (
        <Link to={link} className={`btn br2 ph4-ns pv1-ns ${className}`}>
          <span className={`btn-text`}>{text}</span>
        </Link>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`btn br2 ph4-ns pv1-ns ${className}`}
        >
          <span className={`btn-text`}>{text}</span>
        </button>
      )}
    </>
  );
};
export default Button;
