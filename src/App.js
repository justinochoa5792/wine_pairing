import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import WineGuide from "./components/WineGuide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<WineGuide />} />
      </Routes>
    </div>
  );
}

export default App;
