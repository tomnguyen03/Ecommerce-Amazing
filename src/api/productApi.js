import axios from "axios";

const baseURL = `${process.env.REACT_APP_API}`;

export const productApi = {
  async getProducts(params) {
    const newParams = { ...params };
    const response = await axios.get(`${baseURL}products`, {
      params: newParams,
    });

    return {
      data: response.data,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: response.headers["x-total-count"],
      },
    };
  },
};
