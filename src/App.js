import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import { TheApp } from "./styles/app.styles";
import { useState } from "react";

const App = () => {
  const [item, setItem] = useState([]);

  return (
    <div>
      <div>
        <TheApp>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Home setItem={setItem} item={item} />}
              />
              <Route
                path="/about"
                element={<About item={item} />}
              />
            </Routes>
          </BrowserRouter>
        </TheApp>
      </div>
    </div>
  );
};

export default App;
