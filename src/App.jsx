import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <nav>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="students/:studentId"
              element={<StudentDetailsPage />}
            ></Route>
            <Route path="/profile" element={<UserProfilePage />}></Route>
          </Routes>
        </nav>
      </div>
    </div>
  );
}

export default App;
