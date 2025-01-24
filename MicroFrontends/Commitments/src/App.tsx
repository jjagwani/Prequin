import React from "react";
import ReactDOM from "react-dom/client";
import CommitmentsContent from "./Components/CommitmentsContent";

const App: React.FC = () => {
  return (<CommitmentsContent />);
};

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)