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
        <title>PodLove - Blind-Match Video-Podcast Dating for aged 35–55, Success in Finding Your Perfect Match</title>
        <meta name="description" content="PodLove offers blind-match video-podcast dating for individuals aged 35-55. Discover meaningful connections based on shared interests and engaging podcasts." />
        <meta name="keywords" content="PodLove, video podcast dating, blind-match dating, 35-55 dating, relationships, dating app, find your match" />
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
