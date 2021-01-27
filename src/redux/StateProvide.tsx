import react, { createContext, useContext, useReducer } from "react";

//Prepares the Data Layer

export const StateContext = createContext(0);

type StateProvideType = {
  reducer?: any;
  initialState?: any;
  children?: any;
  Provider?: any;
};

// Wrap Our app  and provide the Data Layer

export const StateProvider = (props: StateProvideType) => {
  const { reducer, initialState, children, Provider } = props;
  <StateProvider.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProvider.Provider>;
};

//pull information from the data layer

export const useStateValue = () => useContext(StateContext);
