import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Helper from "./components/LandingPage/Helper";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/helper" element={<Helper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
