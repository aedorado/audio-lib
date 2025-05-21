import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AudioLibrary from "./AudioLibrary";
import LecturePage from "./LecturePage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AudioLibrary />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
