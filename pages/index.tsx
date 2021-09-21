import type { NextPage } from "next";
import Pricing from "../Components/Pricing";
import { PricingContextProvider } from "../Components/Pricing/context";

const Home: NextPage = () => {
  return (
    <PricingContextProvider>
      <Pricing />;
    </PricingContextProvider>
  );
};

export default Home;
