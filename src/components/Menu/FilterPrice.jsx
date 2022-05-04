import React, { useState } from "react";
import { path } from "./../../constants/path";
import qs from "query-string";
import "./filterprice.scss";
import { useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";

export default function FilterPrice() {
  const navigate = useNavigate();
  const [priceLte, setPriceLte] = useState(9999999);
  const [priceGte, setPriceGte] = useState(0);
  const state = useStore()[0];
  const filters = state.params;
  const handleSubmit = () => {
    const _filters = {
      ...filters,
      price_gte: priceGte,
      price_lte: priceLte,
    };
    navigate(path.home + `?${qs.stringify(_filters)}`);
  };
  return (
    <div className="price-filter">
      <h6>Prices</h6>
      <div className="form">
        <div className="input-form">
          $
          <input
            type="text"
            onChange={(e) =>
              setPriceGte(
                e.target.value != null ? e.target.value : 999999
              )
            }
          />
          to $
          <input
            type="text"
            onChange={(e) =>
              setPriceLte(e.target.value != null ? e.target.value : 0)
            }
          />
        </div>
        <div className="submit-button">
          <button onClick={handleSubmit}>Go</button>
        </div>
      </div>
    </div>
  );
}
