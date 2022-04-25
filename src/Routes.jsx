import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./constants/path";
import MainLayout from "./layouts/MainLayout/MainLayout";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={path.home}
          exact
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />
        <Route
          path={path.notFound}
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
