import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import Navbar from "../components/navbar/Navbar";

const LayoutRoute = ({ children, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }}
      />
    </>
  );
};

export default LayoutRoute;
