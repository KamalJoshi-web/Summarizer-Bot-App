import React from "react";
import Starter from "./components/Starter";
import HeroBanner from "./components/HeroBanner";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <main>
      <HeroBanner />
      <Starter />
      <Toaster />
    </main>
  );
};

export default App;
