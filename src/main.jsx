import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutUs from "./page/Aboutus/Aboutus.jsx";
import Home from "./page/Home/Home.jsx";
import Login from "./page/Login/Login.jsx";
import SignUp from "./page/SignUp/SignUp.jsx";
import ContactUs from "./page/ContactUs/ContactUs.jsx";
import HomePage from "./page/HomePage/HomePage.jsx";
import Otp from "./page/Otp/Otp.jsx";
import Location from "./page/Location/Location.jsx";
import Age from "./page/Age/Age.jsx";
import Gender from "./page/Gender/Gender.jsx";
import Body from "./page/Body/Body.jsx";
import Ethnicity from "./page/Ethnicity/Ethnicity.jsx";
import Bio from "./page/Bio/Bio.jsx";
import UploadPhoto from "./page/UploadPhoto/UploadPhoto.jsx";
import DiscoverCompatibility from "./page/DiscoverCompatibility/DiscoverCompatibility.jsx";
import DiscoverCompatibilitySecond from "./page/DiscoverCompatibilitySecond/DiscoverCompatibilitySecond.jsx";
import RatingYourSelf from "./page/RatingYourSelf/RatingYourSelf.jsx";
import Interest from "./Interest/Interest.jsx";
import ConnectionProgress from "./page/ConnectionProgress/ConnectionProgress.jsx";
import Congratulation from "./page/Congratulation/Congratulation.jsx";
import MatchResult from "./page/MatchResult/MatchResult.jsx";
import MatchBio from "./page/MatchBio/MatchBio.jsx";
import PodcastDetails from "./page/PodcastDetails/PodcastDetails.jsx";
import AfterPodcast from "./page/AfterPodcast/AfterPodcast.jsx";
import ChatPage from "./page/ChatPage/ChatPage.jsx";
import FeedbackOne from "./page/FeedbackOne/FeedbackOne.jsx";
import FeedbackSecond from "./page/FeedbackSecond/FeedbackSecond.jsx";
import FeedbackThird from "./page/FeedbackThird/FeedbackThird.jsx";
import Profile from "./page/Profile/Profile.jsx";
import EditProfile from "./page/EditProfile/EditProfile.jsx";
import ChangePassword from "./page/ChangePassword/ChangePassword.jsx";
import PrivacyPolicy from "./page/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsAndCondition from "./page/TermsAndCondition/TermsAndCondition.jsx";
import Notification from "./page/Notification/Notification.jsx";
import ForgetPassword from "./page/ForgetPassword/ForgetPassword.jsx";
import VerifyEmail from "./page/VerifyEmail/VerifyEmail.jsx";
import SetNewPassword from "./page/SetNewPassword/SetNewPassword.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "sonner";
import OptInPolicy from "./page/OptInPolicy/OptInPolicy.jsx";
import SubscriptionPlan from "./page/SubscriptionPlan/SubscriptionPlan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/after-podcast" element={<AfterPodcast />} />
            <Route path="/subscription-plan" element={<SubscriptionPlan/>} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/feedback-first-step" element={<FeedbackOne />} />
            <Route path="/feedback-second-step" element={<FeedbackSecond />} />
            <Route path="/feedback-third-step" element={<FeedbackThird />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsAndCondition />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/podcast-details/:id" element={<PodcastDetails />} />
            <Route path="/opy-in-policy" element={<OptInPolicy/>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify-otp" element={<Otp />} />
          <Route path="/location" element={<Location />} />
          <Route path="/age" element={<Age />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/body" element={<Body />} />
          <Route path="/ethnicity" element={<Ethnicity />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/upload-photo" element={<UploadPhoto />} />
          <Route
            path="/discover-compatibility"
            element={<DiscoverCompatibility />}
          />
          <Route
            path="/discover-compatibility-part"
            element={<DiscoverCompatibilitySecond />}
          />
          <Route path="/rating-yourself" element={<RatingYourSelf />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/connection-progress" element={<ConnectionProgress />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="/match-result" element={<MatchResult />} />
          <Route path="/match-bio" element={<MatchBio />} />

          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verify-forget-otp" element={<VerifyEmail />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </Provider>
  </StrictMode>
);
