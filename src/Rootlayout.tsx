import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function RootLayout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
