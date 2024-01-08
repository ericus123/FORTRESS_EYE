"use client";

import Registration from "../../components/registration";
import withAuthProtection from "../../hoc/withAuthProtection";

const InvitationPage = () => {
  return <Registration />;
};

export default withAuthProtection(InvitationPage);
