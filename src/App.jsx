import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Today from "./pages/Today";
import Chats from "./pages/Chats";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Today />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}
