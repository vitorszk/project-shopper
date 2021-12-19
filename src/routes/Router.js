import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
