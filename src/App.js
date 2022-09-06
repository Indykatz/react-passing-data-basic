import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import { TheApp } from "./styles/app.styles";

// react use state - PASSING DATA
import { useState } from "react";

const App = () => {
  // useState value = item, function to update = setItem
  const [item, setItem] = useState([]);

  return (
    <div>
      <div>
        <TheApp>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/* <Home setItem={setItem} item={item} />
               tells app.js that this data is passed to Home*/}
              <Route
                path="/"
                element={<Home setItem={setItem} item={item} />}
              />
              {/* <About setItem={setItem} item={item} />
               tells app.js that this data is passed to About*/}
              <Route path="/about" element={<About item={item} />} />
            </Routes>
          </BrowserRouter>
        </TheApp>
      </div>
    </div>
  );
};

export default App;
