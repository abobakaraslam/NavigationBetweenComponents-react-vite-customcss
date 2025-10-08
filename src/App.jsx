// File: App.jsx located in src folder
import Header from "./component/Header";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Login from "./component/Login";
import Diary from "./component/Diary";
import Footer from "./component/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div style={{ backgroundColor: "black", color: "white", padding: "5px" }}>
      <h1>This is main componenet (App.jsx)</h1>
      <Header />
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/diary" element={<Diary />} />
        <Route exact path="/login-user" element={<Login />} />
        <Route exact path="/register-user" element={<Register />} />
      </Routes>

      <Footer />
    </div>
    </Router>
  );
}
export default App;
