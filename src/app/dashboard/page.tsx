"use client";

import Dashboard from "../../components/dashboard";
import withAuthProtection from "../../hoc/withAuthProtection";
import withLoader from "../../hoc/withLoader";

const DashboardPage = () => {
  return <Dashboard />;
};

export default withLoader(withAuthProtection(DashboardPage));
