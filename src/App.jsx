import React from "react";
import Applayout from "./components/Applayout";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Offer from "./pages/Offer";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Other from "./pages/Others";
import Resto from "./components/Resto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="offer" element={<Offer />} />
          <Route path="cart" element={<Cart />} />
          <Route path="help" element={<Help />} />
          <Route path="signin" element={<Signin />} />
          <Route path="others" element={<Other />} />
          <Route path="resto-list/:id" element={<Resto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;