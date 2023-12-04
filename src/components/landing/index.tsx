import HomePageLayout from "../layouts/HomePageLayout";
import LandingContent from "./content";
import LandingTop from "./top";

const Landing = () => {
  return (
    <HomePageLayout>
      <LandingTop />
      <LandingContent />
    </HomePageLayout>
  );
};

export default Landing;
