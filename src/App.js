import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/user/Home";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
