import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/sections/Header";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
