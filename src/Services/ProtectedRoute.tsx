import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded: any = jwtDecode(token);

    if (
      allowedRoles &&
      !allowedRoles.includes(decoded.accountType)
    ) {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;