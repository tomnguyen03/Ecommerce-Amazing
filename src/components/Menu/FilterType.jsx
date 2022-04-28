import React, { useEffect, useState } from "react";
import "./filtertype.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { path } from "./../../constants/path";
import qs from "query-string";

export default function FilterType() {
  const data = [
    "Online data backup",
    "Drone accessory",
    "Bags",
    "Flat screen monitor",
    "Dsl hardware",
    "Networking",
  ];
  const [type, setType] = useState([]);
  const filters = useSelector((state) => state.product.params);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    if (type.indexOf(value) === -1) {
      setType((prevState) => [...prevState, value]);
    } else {
      setType(type.filter((item) => item !== value));
    }
  };
  useEffect(() => {
    const _filters = {
      ...filters,
      type: type,
    };
    navigate(path.home + `?${qs.stringify(_filters)}`);
  }, [type]);
  return (
    <div className="type-filter">
      <h6>Type</h6>
      {data.map((item, index) => {
        return (
          <div className="type-item" key={index}>
            <input
              type="checkbox"
              value={item}
              className="input-filter"
              id={`input-filter-${index}`}
              onChange={(e) => handleChange(e)}
            ></input>
            <label htmlFor={`input-filter-${index}`}>{item}</label>
          </div>
        );
      })}
    </div>
  );
}
