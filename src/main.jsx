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
import RatingYourSelf from "./page/RatingYourSelf/RatingYourSelf.jsx";
import Interest from "./Interest/Interest.jsx";
import Congratulation from "./page/Congratulation/Congratulation.jsx";
import MatchResult from "./page/MatchResult/MatchResult.jsx";
import ChatPage from "./page/ChatPage/ChatPage.jsx";
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
import ParticipantDetails from "./page/ParticipantDetails/ParticipantDetails.jsx";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ConsumerPolicy from "./page/ConsumerPolicy/ConsumerPolicy.jsx";
import Faq from "./component/Faq/Faq.jsx";
import MediaPolicy from "./page/MediaPolicy/MediaPolicy.jsx";
import ScrollToTop from "./helpers/ScrollToTop.js";
import RoomPage100MS from "./page/RoomPage100MS/RoomPage100MS.jsx";
import MediaUsageConsent from "./page/MediaUsageConsent/MediaUsageConsent.jsx";
import DoNotSellPersonalInfo from "./page/DoNotSellPersonalInfo/DoNotSellPersonalInfo.jsx";
import ConsumerHealthDataPrivacyPolicy from "./page/ConsumerHealthDataPrivacyPolicy/ConsumerHealthDataPrivacyPolicy.jsx";
import SubscriptionPage from "./page/SubscriptionPage/SubscriptionPage.jsx";
import ConnectionPathway from "./page/ConnectionPathway/ConnectionPathway.jsx";
import DiscoverCompatibilityPart1 from "./page/DiscoverCompatibilityPart1/DiscoverCompatibilityPart1.jsx";
import DiscoverCompatibilityPart2 from "./page/DiscoverCompatibilityPart2/DiscoverCompatibilityPart2.jsx";
import DiscoverCompatibilityPart3 from "./page/DiscoverCompatibilityPart3/DiscoverCompatibilityPart3.jsx";
import DiscoverCompatibilityPart4 from "./page/DiscoverCompatibilityPart4/DiscoverCompatibilityPart4.jsx";
import OurApproach from "./page/OurApproach/OurApproach.jsx";
import WhatToExpect from "./page/WhatToExpect/WhatToExpect.jsx";
import TermsOfUse from "./page/TermsOfUse/TermsOfUse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="114291454850-j5ka6eofvaqjvtl29gt5of0s9o855fdg.apps.googleusercontent.com">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/ms" element={<RoomPage100MS />} />
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/subscription-plan" element={<SubscriptionPlan />} />
              <Route path="/subscription-page" element={<SubscriptionPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/media-usage-consent"
                element={<MediaUsageConsent />}
              />
              <Route
                path="/do-not-sell-or-share-my-personal-info"
                element={<DoNotSellPersonalInfo />}
              />
              <Route
                path="/consumer-health-data-privacy-policy"
                element={<ConsumerHealthDataPrivacyPolicy />}
              />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndCondition />}
              />
              <Route path="/consumer-policy" element={<ConsumerPolicy />} />,
              <Route path="/media-policy" element={<MediaPolicy />} />
              <Route path="/opt-in-policy" element={<OptInPolicy />} />
              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />{" "}
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route
                  path="/podcast-details/:id"
                  element={<ParticipantDetails />}
                />
                <Route path="/chat/:id" element={<ChatPage />} />
                <Route path="/notification" element={<Notification />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/what-to-expect" element={<WhatToExpect />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/connection-pathway" element={<ConnectionPathway />} />
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
              path="/discover-compatibility-part1"
              element={<DiscoverCompatibilityPart1 />}
            />
            <Route
              path="/discover-compatibility-part2"
              element={<DiscoverCompatibilityPart2 />}
            />
            <Route
              path="/discover-compatibility-part3"
              element={<DiscoverCompatibilityPart3 />}
            />
            <Route
              path="/discover-compatibility-part4"
              element={<DiscoverCompatibilityPart4 />}
            />
            <Route path="/rating-yourself" element={<RatingYourSelf />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/verify-forget-otp" element={<VerifyEmail />} />
            <Route path="/set-new-password" element={<SetNewPassword />} />

            {/* private */}
            <Route element={<PrivateRoute />}>
              <Route path="/congratulation" element={<Congratulation />} />
              <Route path="/match-result" element={<MatchResult />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
