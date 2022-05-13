import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResultStore } from "./store/ResultStore";
import Home from "./routes/Home";
import Play from "./routes/Play";
import GameOptions from "./routes/GameOptions";
import GameEngine from "./routes/GameEngine";
import Result from "./routes/Result";
import Rules from "./routes/Rules";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import "./index.css";

const App: React.FC = () => {
  return (
    <ResultStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />}>
            <Route index element={<GameOptions />} />
            <Route path="start" element={<GameEngine />} />
          </Route>
          <Route path="/result" element={<Result />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ResultStore>
  );
};

export default App;
