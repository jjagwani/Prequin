import React from "react";
import ReactDOM from "react-dom/client";
import GlobalRouter from "./GlobalRouter";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

const App: React.FC = () => {
  return (<GlobalRouter />);
};

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<Provider store={Store}><App /></Provider>)