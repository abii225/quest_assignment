import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <div className="bg-primary h-[100%] md:min-h-[100vh] py-2">
        <Homepage />
      </div>
    </>
  );
}

export default App;
