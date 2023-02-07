import React from "react";
import "./styles.css";
import { ContextProvider } from "./Context";
import Photos from "./Photos"


export default function App() {
  return (
    <ContextProvider>
        <div className="App">
          <Photos />
        </div>
    </ContextProvider>
  );
}

