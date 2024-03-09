import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed } from "./Components/Home/Feed";
import { CreateFeed } from "./Components/CreateFeed/CreateFeed";
import { Preview } from "./Components/CreateFeed/Preview";
import { IndividualFeed } from "./Components/IndividualFeed/IndividualFeed";
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
          <Route element={<Preview />} path="/create-post/preview" />
          <Route element={<IndividualFeed />} path="/:feed" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
