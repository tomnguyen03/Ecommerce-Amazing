import React, { useEffect, useState } from "react";
import "./filtertype.scss";
import { useNavigate } from "react-router-dom";
import { path } from "./../../constants/path";
import qs from "query-string";
import useStore from "../../hooks/useStore";

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
  const state = useStore()[0];
  const navigate = useNavigate();
  const filters = state.params;
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
