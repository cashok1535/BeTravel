import { createRoot } from "react-dom/client";
import "../src/css/index.css";
import "../src/css/fonts.css"
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
