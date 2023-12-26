"use client";

import Dashboard from "../../components/dashboard";
import withAuthProtection from "../../hoc/withAuthProtection";
import withLoader from "../../hoc/withLoader";
import withLocationProtected from "../../hoc/withLocationTracking";

const DashboardPage = () => {
  return <Dashboard />;
};

export default withLoader(
  withLocationProtected(withAuthProtection(DashboardPage))
);
