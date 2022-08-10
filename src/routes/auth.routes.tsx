import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to="/signin" />
  }

  return children;
}