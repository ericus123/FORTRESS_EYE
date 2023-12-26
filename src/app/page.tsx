"use client";

import Landing from "../components/landing";
import withAuthProtection from "../hoc/withAuthProtection";
const Home = () => {
  return <Landing />;
};

export default withAuthProtection(Home);
