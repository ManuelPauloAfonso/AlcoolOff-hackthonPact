import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthNavigator } from "./AuthNavigator";
import { AppNavigator } from "./AppNavigator";

export const Routes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return <>{isLoggedIn ? <AppNavigator /> : <AuthNavigator />}</>;
};
