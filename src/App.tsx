import React from "react";
import "@radix-ui/themes/styles.css";
import { Header } from "./Components/Elements/Header";
import { Footer } from "./Components/Elements/Footer";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="relative min-h-[100vh]">
      <Header />
      <div className="mt-[-50px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
