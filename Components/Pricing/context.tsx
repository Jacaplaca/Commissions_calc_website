import { createContext, FunctionComponent, useContext } from "react";
import { ContextDevTool } from "react-context-devtool";
import usePricingStore from "./usePricingStore";

type UseSomeStoreType = ReturnType<typeof usePricingStore>;
const PricingContext = createContext<UseSomeStoreType | null>(null);

export const PricingContextProvider: FunctionComponent = ({ children }) => {
  const store = usePricingStore();
  return (
    <PricingContext.Provider value={store}>
      <ContextDevTool
        context={PricingContext}
        id="Pricing"
        displayName="Pricing"
      />
      {children}
    </PricingContext.Provider>
  );
};

export const usePricingContext = () => {
  const context = useContext(PricingContext);

  if (!context) {
    throw new Error(
      "usePricingContext must be used within a PricingContextProvider"
    );
  }

  return context;
};
