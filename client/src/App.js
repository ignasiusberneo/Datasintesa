import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import UploadPage from "./views/UploadPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
