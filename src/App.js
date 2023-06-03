//hooks
import { useEffect } from "react";
import { useStateProvider } from "./Utils/StateProvider";
//styles
import "./App.css";
//components
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  const { token, updateToken } = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tokenCode = hash.substring(1).split("&")[0].split("=")[1];
      updateToken(tokenCode);
    }
  }, [token, updateToken]);

  return <div className="App">{token ? <Home /> : <Login />}</div>;
}

export default App;
