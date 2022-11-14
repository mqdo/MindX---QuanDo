import React from "react";
import { Outlet } from "react-router-dom";

const Invoices = () => {
  return (
    <>
      <div>Invoices</div>
      <Outlet />
    </>
  );
};

export default Invoices;
