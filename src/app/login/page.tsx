"use client";

import Login from "../../components/login";
import withAuthProtection from "../../hoc/withAuthProtection";

const LoginPage = () => {
  return <Login />;
};

export default withAuthProtection(LoginPage);
