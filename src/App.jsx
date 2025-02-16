import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./component/Shared/NavBar";
import Footer from "./component/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
