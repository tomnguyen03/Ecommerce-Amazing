import React from "react";
import FilterCategories from "./FilterCategories";
import "./menu.scss";
import FilterType from "./FilterType";
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";
export default function Menu() {
  return (
    <div className="menu">
      <h6>Show results for</h6>
      <div className="filter-item">
        <FilterCategories />
      </div>
      <div className="filter-item">
        <FilterType />
      </div>
      <div className="filter-item">
        <FilterRating />
      </div>
      <div className="filter-item">
        <FilterPrice />
      </div>
    </div>
  );
}
