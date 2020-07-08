import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./Routes/Routes";

export default () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <ToastContainer position="bottom-left" />
    </>
  );
}

