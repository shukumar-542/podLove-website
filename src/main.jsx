import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutUs from "./page/AboutUs/AboutUs.jsx";
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
// import PodcastDetails from "./page/PodcastDetails/PodcastDetails.jsx";
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
// import RoomPage from "./page/RoomPage/RoomPage.jsx";
import ParticipantDetails from "./page/ParticipantDetails/ParticipantDetails.jsx";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ConsumerPolicy from "./page/ConsumerPolicy/ConsumerPolicy.jsx";
import MediaPlicy from "./page/MediaPlicy/MediaPlicy.jsx";
import OurApproach from "./page/OurApproach/OurApproach.jsx";
import TermsOfUse from "./page/TermsOfUse/TermsOfUse.jsx";
import RelationShipReadinessOne from "./page/RelationShipReadinessOne/RelationShipReadinessOne.jsx";
import RelationShipReadinessTwo from "./page/RelationShipReadinessTwo/RelationShipReadinessTwo.jsx";
import AttentionError from "./page/AttentionError/AttentionError.jsx";
import ScrollToTop from "./helpers/ScrollToTop.js";
import RoomPage100MS from "./page/RoomPage100MS/RoomPage100MS.jsx";
// import MS from "./page/100MS/100MS.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="471587701955-i0so67cvfpje0k7akpdlrt3tt8u3dprk.apps.googleusercontent.com">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/ms" element={<RoomPage100MS />} />
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<HomePage />} />
              </Route>
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/after-podcast" element={<AfterPodcast />} />
              <Route path="/subscription-plan" element={<SubscriptionPlan />} />
              <Route element={<PrivateRoute />}>
                <Route path="/chat/:id" element={<ChatPage />} />
              </Route>
              <Route path="/feedback-first-step" element={<FeedbackOne />} />
              <Route path="/feedback-second-step" element={<FeedbackSecond />} />
              <Route path="/feedback-third-step" element={<FeedbackThird />} />
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/edit-profile" element={<EditProfile />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/change-password" element={<ChangePassword />} />
              </Route>
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
              <Route element={<PrivateRoute />}>
                <Route path="/notification" element={<Notification />} />
              </Route>
              <Route path="/consumer-policy" element={<ConsumerPolicy />} />,
              <Route path="/media-policy" element={<MediaPlicy />} />
              <Route path="/podcast-details/:id" element={<ParticipantDetails />} />
              <Route path="/opt-in-policy" element={<OptInPolicy />} />
              {/* <Route element={<PrivateRoute />}>
                <Route path="/room/:roomId" element={<RoomPage />} />
              </Route> */}
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
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/verify-forget-otp" element={<VerifyEmail />} />
            <Route path="/set-new-password" element={<SetNewPassword />} />
            <Route path="/our-approch" element={<OurApproach />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/relationship-first" element={<RelationShipReadinessOne />} />
            <Route path="/relationship-second" element={<RelationShipReadinessTwo />} />
            <Route path="/attention-error" element={<AttentionError />} />

          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
