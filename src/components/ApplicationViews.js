import React from "react";
import { Route } from "react-router-dom";
import { ProductList } from "./product/ProductList";
import { ProductProvider } from "./product/ProductProvider";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
      <ProductProvider>
        <Route path="/products">
          <ProductList />
        </Route>
      </ProductProvider>
    </>
  );
};
