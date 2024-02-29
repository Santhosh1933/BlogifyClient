import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed } from "./Components/Home/Feed";
import { CreateFeed } from "./Components/CreateFeed/CreateFeed";

function App() {
  return (
    <div className="">
      <div className="main">
        <div className="gradient"></div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route element={<Feed />} path="/" />
          <Route element={<CreateFeed />} path="/create-post" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
