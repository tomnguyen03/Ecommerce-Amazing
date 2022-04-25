import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@material-ui/lab";
import "./product-skeleton.scss";

ProductSkelete.propTypes = {
  length: PropTypes.number,
};

function ProductSkelete({ length = 16 }) {
  return (
    <div className="product-skeleton">
      {Array.from(new Array(length)).map((item, index) => (
        <div className="product-skeleton-item" key={index}>
          <Skeleton variant="rect" height={150} width="100%" />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" />
        </div>
      ))}
    </div>
  );
}

export default ProductSkelete;
