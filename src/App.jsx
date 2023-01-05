import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import pages
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/video" element={<VideoPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
