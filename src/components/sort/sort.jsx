import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "./../../constants/path";
import qs from "query-string";

export default function ProductSort({ filters }) {
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sort !== "") {
      const params = sort.split("-");
      const _filters = {
        ...filters,
        _sort: params[0],
        _order: params[1],
      };
      navigate(path.home + `?${qs.stringify(_filters)}`);
      // console.log("sort1");
    }
    // console.log("sort2");
  }, [sort, filters, navigate]);
  return (
    <div className="product__sort">
      <label htmlFor="sort"></label>
      <select
        name="sort"
        id="sort"
        onChange={(event) => {
          setSort(event.target.value);
        }}
      >
        <option value="name-asc">Name</option>
        <option value="price-asc">Price ASC</option>
        <option value="price-desc">Price DESC</option>
      </select>
    </div>
  );
}
