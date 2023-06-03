import { createContext, useCallback, useContext, useReducer } from "react";
import reducer, { initialState, reducerCases } from "./Reducer";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToken = useCallback((token) => {
    dispatch({ type: reducerCases.SET_TOKEN, payload: token });
  }, []);

  return (
    <StateContext.Provider value={{ ...state, updateToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
