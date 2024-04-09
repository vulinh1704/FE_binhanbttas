import React from "react";
import { Navigate } from "react-router-dom";

const AdminCheckContact = ({ token }) => {
  if (token === undefined) {
    return <Navigate to="/admin" replace />;
  }
  return <div className="pt-[100px]">AdminCheckContact</div>;
};

export default AdminCheckContact;
