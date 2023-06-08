//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//hooks
import { useEffect } from "react";
import { useStateProvider } from "./Utils/StateProvider";
//styles
import "./App.css";
//components
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Search from "./Pages/Search/Search";
//constants
import { reducerCases } from "./Utils/Reducer";

function App() {
  const { token, updateData } = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tokenCode = hash.substring(1).split("&")[0].split("=")[1];
      updateData(tokenCode, reducerCases.SET_TOKEN);
    }
  }, [token, updateData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />}></Route>
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
