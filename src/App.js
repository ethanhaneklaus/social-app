import "./App.css";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import MainPage from "./components/MainPage";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./context/UserContext";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/register"
          element={
            <ProtectedRoute requiresLogin={false} component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedRoute requiresLogin={false} component={<LoginPage />}
            />
          }
        />

        <Route
          path="/main"
          element={
            <ProtectedRoute requiresLogin={true} component={<MainPage />}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute requiresLogin={true} component={<ProfilePage />}
            />
          }
        />

        {/* <Route
          path="/"
          element={
            <ProtectedRoute requiresLogin={true} component={< />}
            />
          } 
          /> */}
        <Route path="*" element={<Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
