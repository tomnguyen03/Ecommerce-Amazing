import React, { useEffect, useState } from "react";
import "./product.scss";
import ProductItem from "src/components/ProductItem/ProductItem";
import { productApi } from "./../../api/productApi";
import ProductSkelete from "../../components/Skeleton/ProductSkelete";
import { Pagination, Skeleton } from "@material-ui/lab";
import Menu from "../../components/Menu/Menu";

export default function Product() {
  const limit = 16;
  const [products, setProducts] = useState([]);
  const [paginationData, setPaginationData] = useState({
    limit: limit,
    page: 1,
    total: limit,
  });
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name-asc");
  const [filterPagination, setFilterPagination] = useState({
    _page: 1,
    _limit: limit,
  });

  useEffect(() => {
    const _getProducts = async () => {
      //Sort by
      const sortType = sortBy.split("-");
      const params = {
        ...filterPagination,
        _sort: sortType[0],
        _order: sortType[1],
      };
      const data = await productApi.getProducts(params);
      setProducts(data.data);
      setPaginationData(data.pagination);
    };
    _getProducts();
    setLoading(false);
  }, [sortBy, filterPagination]);

  //function handle change pagination
  const handleChangePagination = (e, page) => {
    setFilterPagination((prevFilterPagination) => ({
      ...prevFilterPagination,
      _page: page,
    }));
  };
  return (
    <div className="product">
      <div className="product__sidebar">
        <Menu />
      </div>
      <div className="product__main">
        <div className="product__count-sort">
          <div className="product__count">
            {loading ? (
              <Skeleton variant="text" width={20} />
            ) : (
              paginationData.total
            )}{" "}
            results found
          </div>
          <div className="product__sort">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="name-asc">Name</option>
              <option value="price-asc">Price ASC</option>
              <option value="price-desc">Price DESC</option>
            </select>
          </div>
        </div>
        {loading ? (
          <ProductSkelete length={100} />
        ) : (
          <div className="product__list">
            {products.slice(0, 100).map((product, index) => (
              <ProductItem
                rating={product.rating}
                image={product.image}
                title={product.name}
                price={product.price}
                key={index}
              />
            ))}
          </div>
        )}
        <div className="product__pagination">
          <Pagination
            count={Math.ceil(paginationData.total / limit)}
            page={paginationData.page}
            onChange={handleChangePagination}
          />
        </div>
      </div>
    </div>
  );
}
