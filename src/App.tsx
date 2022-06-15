import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Profile from "./components/Profile/Profile";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

export default function App() {
  return (
    <BR>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BR>                       
  );
}
