import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./component/Shared/NavBar";
import Footer from "./component/Shared/Footer/Footer";
// import NewFooter from "./component/NewFooter/NewFooter";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>PodLove - Success in Finding Your  Perfect Match</title>
        <meta name="description" content="PodLove - Success in Finding Your  Perfect Match" />
        <meta name="keywords" content="podLove, dating, dating website, dating app, relationships" />
      </Helmet>
      <NavBar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      {/* <NewFooter/> */}
      <Footer />
    </div>
  );
}

export default App;
