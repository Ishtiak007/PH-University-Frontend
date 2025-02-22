import { ReactNode } from "react";
import { useAppSelector } from "../../redux/features/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector();
  return children;
};

export default ProtectedRoute;
