import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/signin" />
  }

  return children;
}