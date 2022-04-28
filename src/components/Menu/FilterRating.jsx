import React from "react";
import "./ratingtype.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { path } from "./../../constants/path";
import qs from "query-string";

export default function FilterRating() {
  const data = [6, 5, 4, 3, 2, 1];
  const navigate = useNavigate();
  const filters = useSelector((state) => state.product.params);
  const handleClick = (value) => {
    const _filters = {
      ...filters,
      rating_gte: value,
    };
    navigate(path.home + `?${qs.stringify(_filters)}`);
  };
  return (
    <div className="rating-filter">
      <h6>Rating</h6>
      {data.map((item, index) => {
        return (
          <div
            className="rating-item"
            key={index}
            onClick={() => handleClick(item)}
          >
            {[...Array(6)].map((_, index) =>
              index < item ? (
                <i className="bx bxs-star" key={index}></i>
              ) : (
                <i className="bx bx-star" key={index}></i>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
