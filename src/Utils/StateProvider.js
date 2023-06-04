//hooks
import { createContext, useCallback, useContext, useReducer } from "react";
// useReducer parameters
import reducer, { initialState } from "./Reducer";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateData = useCallback((data, actionType) => {
    dispatch({ type: actionType, payload: data });
  }, []);

  return (
    <StateContext.Provider value={{ ...state, updateData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
