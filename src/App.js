import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
