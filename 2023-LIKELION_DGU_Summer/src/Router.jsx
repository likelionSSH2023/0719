// Router.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:city" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
