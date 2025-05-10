import React from "react";
import { SkipGrid } from "./components/SkipGrid/SkipGrid";
import { skipsData } from "./data/skips";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SkipGrid skips={skipsData} />
    </div>
  );
}

export default App;
