import React, { lazy, Suspense } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
// const Navbar = lazy(() => import("../navbar/Navbar"));

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>loading</div>}>{children}</Suspense>
      <Footer />
    </>
  );
};

export default Layout;
