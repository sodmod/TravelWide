import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function RootLayout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
