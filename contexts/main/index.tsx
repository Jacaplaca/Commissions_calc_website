import { createContext, FunctionComponent, useContext } from "react";
import { ContextDevTool } from "react-context-devtool";
import useMainStore from "./useMainStore";

type UseSomeStoreType = ReturnType<typeof useMainStore>;
const MainContext = createContext<UseSomeStoreType | null>(null);

export const MainContextProvider: FunctionComponent = ({ children }) => {
  const store = useMainStore();
  return (
    <MainContext.Provider value={store}>
      <ContextDevTool context={MainContext} id="Main" displayName="Main" />
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext must be used within a MainContextProvider");
  }

  return context;
};
