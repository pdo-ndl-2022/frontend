import { useContext } from "react";
import { AuthContext, IAuthContext } from "../contexts/Auth.context";

export const useAuth = (): IAuthContext => {
  const context = useContext<IAuthContext | undefined>(AuthContext);
  if (!context) {
    throw new Error(
      "Missing provider. useAuth can only be used inside AuthProvider."
    );
  }
  return context;
};
