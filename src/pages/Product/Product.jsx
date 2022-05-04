import React, { useEffect, useState } from "react";
import "./product.scss";
import ProductItem from "src/components/ProductItem/ProductItem";
import ProductSkelete from "../../components/Skeleton/ProductSkelete";
import { Pagination, Skeleton } from "@material-ui/lab";
import Menu from "../../components/Menu/Menu";
import ProductSort from "../../components/sort/sort";
import useQuery from "./../../hooks/useQuery";
import { productApi } from "./../../api/productApi";
import useStore from "../../hooks/useStore";
import { actions } from "../../store/index.js";

export default function Product() {
  const limit = 16;

  const [products, setProducts] = useState([]);

  const [paginationData, setPaginationData] = useState({
    limit: limit,
    page: 1,
    total: limit,
  });
  const [loading, setLoading] = useState(true);

  //query search
  const query = useQuery();
  const [filters, setFilters] = useState(query);
  const dispatch = useStore()[1];

  useEffect(() => {
    const _filters = {
      ...query,
      _page: Number.parseInt(query._page) || 1,
      _limit: Number.parseInt(query._limit) || 16,
    };
    setFilters(_filters);
    const params = {
      _page: _filters._page,
      _limit: _filters._limit,
      _sort: _filters._sort,
      _order: _filters._order,
      name_like: _filters.name_like,
      categories_like: _filters.categories_like,
      rating_gte: _filters.rating_gte,
      price_gte: _filters.price_gte,
      price_lte: _filters.price_lte,
      type: _filters.type,
    };
    const _getProducts = async () => {
      const data = await productApi.getProducts(params);
      setProducts(data.data);
      setPaginationData(data.pagination);
      dispatch(actions.setParams(data.params));
    };
    _getProducts();

    setLoading(false);
  }, [query, dispatch]);

  //function handle change pagination
  const handleChangePagination = (e, page) => {
    setFilters((prevFilterPagination) => ({
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
          <ProductSort filters={filters} />
        </div>
        {loading ? (
          <ProductSkelete length={100} />
        ) : (
          <div className="product__list">
            {products.map((product, index) => (
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
