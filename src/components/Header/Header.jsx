import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="">
          <img
            src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
            alt="logo"
          />
          amazing
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search a product"
          name="search"
          className="search"
        />
        <button className="search-btn">
          <i className="bx bx-search"></i>
        </button>
      </div>
    </header>
  );
}
