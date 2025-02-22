import React from "react";
import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FAF2EF]">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
          Privacy Policy
        </h1>

        <p className="text-xl mb-5 font-bold font-poppins">
          Last Updated: December 3, 2024
        </p>
        <p className="font-poppins mb-5">
          Welcome to PodLove! We value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains
          what information we collect, why we collect it, and how we use, share,
          and protect your data. By using our services, you agree to the
          collection and use of your information in accordance with this policy.
        </p>

        <p className="text-xl mb-5 font-bold font-poppins">
          1. Information We Collect
        </p>
        <div className="font-poppins space-y-8">
          <p>
            1.1 Personal Information: When you register on PodLove, we collect
            information you provide, including your name, age, gender, sexual
            orientation, date of birth, phone number, location, and demographic
            details. This helps us build your profile and connect you with
            suitable matches.
          </p>
          <p>
            1.2 Questionnaires: We collect responses to vetting and
            compatibility questions to assess your compatibility with the
            PodLove community, including your preferences for relationships,
            views on consent, emotional availability, and other related
            information.
          </p>
          <p>
            1.3 Profile Content: You may choose to upload profile photos and a
            brief introduction about yourself. This information will be used for
            matchmaking purposes and may be shared during podcast episodes.
          </p>
          <p>
            1.4 Usage Data: We collect information about how you use the PodLove
            app, including app interaction, match preferences, availability for
            podcast sessions, and post-date feedback. This helps us understand
            your needs and improve our services.
          </p>
          <p>
            1.5 Device Information: We may collect device-specific information,
            such as your mobile device model, IP address, operating system, and
            unique device identifiers, to enhance security and app
            functionality.
          </p>
        </div>

        <p className="text-xl mb-5 font-bold font-poppins mt-5">
          2. How We Use Your Information
        </p>
        <div className="font-poppins space-y-8">
          <p>
            2.1 Providing Our Services: We use your personal information to
            match you with potential partners, facilitate podcast episodes,
            schedule dates, and deliver a personalized dating experience through
            the app.
          </p>
          <p>
            2.2 Improving User Experience: Information gathered through app
            interactions and post-date feedback is used to continuously improve
            our matchmaking algorithm, the podcast experience, and the overall
            service quality.
          </p>
          <p>
            2.3 Safety and Security: We use your information to maintain a
            secure platform, including verifying your identity, ensuring
            adherence to community guidelines, and preventing unauthorized
            activity.
          </p>
          <p>
            2.4 Communications: We may use your email or phone number to send
            you notifications, updates about matches, confirmations of podcast
            invitations, or newsletters. You can opt out of marketing
            communications at any time.
          </p>
          <p>
            2.5 Marketing and Advertising: With your consent, we may use your
            data to present personalized content and advertising based on your
            interests.
          </p>
        </div>
        <p>3. Sharing Your Information</p>
        <p>
          3.1 Podcast Participation: During podcast recordings, basic
          information such as your name, age, and brief introduction may be
          shared with other participants and podcast listeners.
        </p>
        <p>
          3.2 Third-Party Service Providers: We use trusted third-party vendors
          for services like app development, hosting, payment processing,
          customer support, and data analytics. These service providers only
          have access to your information as necessary to perform these tasks on
          our behalf and are required to keep your data secure.
        </p>
        <p>
          3.3 Legal Compliance: We may disclose your personal information when
          required by law, such as to comply with a subpoena, legal process, or
          government request or to protect the rights, property, and safety of
          PodLove, our users, and others.
        </p>

        <p className="text-xl mb-5 font-bold font-poppins">5. Data Retention</p>
        <p className="font-poppins space-y-8 pb-10" >
          We will retain your personal information for as long as you use the
          app and for a reasonable period thereafter as needed to fulfill the
          purposes outlined in this Privacy Policy or as required by applicable
          law.
        </p>

      </div>
        <IsPodSafe/>
    </div>
  );
};

export default PrivacyPolicy;
