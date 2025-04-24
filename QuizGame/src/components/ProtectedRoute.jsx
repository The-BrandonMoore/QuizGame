import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const BYPASS_AUTH = import.meta.env.VITE_BYPASS_AUTH === "true";
  // Bypass auth check if BYPASS_AUTH is true
  if (BYPASS_AUTH) {
    return children;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
