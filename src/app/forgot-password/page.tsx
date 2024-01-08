"use client";

import ForgotPassword from "../../components/password";
import withAuthProtection from "../../hoc/withAuthProtection";

const ForgotPasswordPage = () => {
  return <ForgotPassword />;
};

export default withAuthProtection(ForgotPasswordPage);
