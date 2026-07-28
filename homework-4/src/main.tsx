import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootReactEl = document.getElementById("root");

const createRootEl = createRoot(rootReactEl!);

createRootEl.render(<App />);
