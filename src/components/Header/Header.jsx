import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import { path } from "./../../constants/path";
import qs from "query-string";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const filters = useSelector((state) => state.product.params);

  const handleChangeSearch = (value) => {
    const _filters = {
      ...filters,
      name_like: value,
    };
    navigate(path.home + `?${qs.stringify(_filters)}`);
  };
  return (
    <header>
      <div className="logo">
        <Link to={path.home}>
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
          onChange={(e) => handleChangeSearch(e.target.value)}
        />
        <button className="search-btn">
          <i className="bx bx-search"></i>
        </button>
      </div>
    </header>
  );
}
