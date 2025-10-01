import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}