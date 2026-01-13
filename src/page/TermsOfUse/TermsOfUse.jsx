import { Button, ConfigProvider, Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";
import img1 from "../../assets/podLogo.png";

export default function TermsOfUse() {
  const navigate = useNavigate();

  // Secure Logic: Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <ConfigProvider
      theme={{ components: { Button: { colorPrimary: "rgb(255,161,117)" } } }}
    >
      <div className="min-h-screen bg-[#ffa175] flex items-center justify-center py-12 px-3 relative font-sans">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 z-[9999]"
        >
          <IoArrowBack size={30} className="text-white cursor-pointer" />
        </button>

        <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-5">
          {/* Logo and Header */}
          <div className="flex flex-col items-center mb-8">
            <NavLink to="/">
              <img className="h-8 md:h-10" src={img1} alt="Logo" />
            </NavLink>
            <h1 className="text-3xl font-bold text-gray-800 mt-6">
              Terms of Use
            </h1>
          </div>

          {/* Terms Content - Scrollable Area */}
          <div className="flex-1 overflow-y-auto pr-4 mb-8 text-gray-600 space-y-8 text-sm leading-relaxed custom-scrollbar">
            {/* 1. Welcome Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Welcome to our pod!
              </h3>
              <p>
                PodLove fosters deeper connections and intentional dating,
                creating a platform where genuine relationships blossom through
                innovative, podcast-style conversations. We envision a world
                where meaningful relationships are built on open communication,
                emotional compatibility, and mutual respect. By accessing or
                using our services, you agree to these Terms of Use, which
                outline your responsibilities and rights while engaging with
                PodLove.
              </p>
            </section>

            {/* 2. Safety and Respect Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Commitment to Safety and Respect
              </h3>
              <p className="mb-3">
                At PodLove, safety is the foundation of our platform. Every
                participant is expected to contribute to a culture of respect,
                kindness, and inclusively. This commitment includes:
              </p>
              <ul className="space-y-3">
                <li>
                  <strong>• Active Respect:</strong> Treat all participants with
                  dignity and kindness, regardless of background or beliefs.
                </li>
                <li>
                  <strong>• Safety Awareness:</strong> Uphold the importance of
                  consent and personal boundaries in all interactions.
                </li>
                <li>
                  <strong>• Inclusively:</strong> Embrace diversity and create a
                  welcoming environment for all users.
                </li>
              </ul>
            </section>

            {/* 3. User Responsibilities Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                User Responsibilities
              </h3>
              <p className="mb-3">By using PodLove, you agree to:</p>
              <ul className="space-y-3">
                <li>
                  <strong>• Honest Representation:</strong> Provide accurate
                  information about yourself during registration and maintain a
                  truthful profile.
                </li>
                <li>
                  <strong>• Genuine Intentions:</strong> Use the platform with
                  the genuine desire to form meaningful, long-term connections.
                </li>
                <li>
                  <strong>• Consent and Communication:</strong> Respect the
                  boundaries and preferences of others, ensuring that all
                  interactions are consensual.
                </li>
                <li>
                  <strong>• Respect for Privacy:</strong> Keep personal and
                  podcast information shared by others confidential.
                </li>
              </ul>
            </section>

            {/* 4. Safety Measures Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Safety Measures
              </h3>
              <p className="mb-3">
                To create a secure and supportive environment, PodLove has
                implemented the following safety measures:
              </p>
              <ul className="space-y-3">
                <li>
                  <strong>• Comprehensive Vetting Process:</strong> Participants
                  are vetted to ensure alignment with PodLove’s commitment to
                  serious, respectful dating.
                </li>
                <li>
                  <strong>• AI Moderation:</strong> Our platform uses advanced
                  technology to identify inappropriate or harmful behavior.
                </li>
                <li>
                  <strong>• Reporting System:</strong> Users can report any
                  concerns or violations through the app’s support feature.
                </li>
                <li>
                  <strong>• Support Resources:</strong> PodLove provides
                  resources and assistance to users experiencing issues with the
                  platform or other participants.
                </li>
              </ul>
            </section>

            {/* 5. Platform Use Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Use of the Platform
              </h3>
              <p className="mb-3">
                PodLove’s services, including its app and podcast, are intended
                for users aged 35-50 who are seeking committed relationships. By
                using PodLove, you agree to:
              </p>
              <ul className="space-y-3">
                <li>• Abide by all applicable laws and regulations.</li>
                <li>
                  • Refrain from using the platform for any unlawful or harmful
                  activities.
                </li>
                <li>
                  • Comply with all instructions provided by PodLove regarding
                  participation in podcasts, matching, and dating.
                </li>
              </ul>
            </section>

            {/* 6. Privacy Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Privacy and Data Usage
              </h3>
              <p>
                Your privacy is important to us. By using PodLove, you consent
                to our collection, storage, and use of your information as
                outlined in our <strong>[Privacy Policy]</strong>. PodLove does
                not sell or share your personal information with third parties
                without your explicit consent.
              </p>
            </section>

            {/* 7. Liability Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Limitation of Liability
              </h3>
              <p>
                While PodLove strives to provide a safe and enjoyable
                experience, we cannot guarantee outcomes or the behavior of
                participants. Users are responsible for their interactions, and
                PodLove is not liable for any issues arising from connections
                made through the platform.
              </p>
            </section>

            {/* 8. Modifications Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Modifications to Terms
              </h3>
              <p>
                PodLove reserves the right to modify these Terms of Use at any
                time. Changes will be communicated to users, and continued use
                of the platform constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* 9. Contact Section */}
            <section>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                Contact Us
              </h3>
              <p>
                If you have questions or concerns about these Terms of Use,
                please contact us at{" "}
                <span className="text-[#ffa175] font-bold">
                  support@podlove.co
                </span>
              </p>
            </section>

            {/* Final Footer Text */}
            <section className="border-t pt-6 space-y-4">
              <p className="font-bold text-red-500 italic">
                Failure to adhere to these responsibilities may result in
                suspension or removal from the platform.
              </p>

              <p className="text-gray-700 font-medium">
                By using PodLove, you agree to abide by these Terms of Use and
                help create a safe, respectful, and meaningful dating experience
                for everyone. Welcome to PodLove, let&apos;s build connections
                that last!
              </p>
            </section>
          </div>

          {/* Bottom Action Button */}
          <Button
            type="primary"
            size="large"
            block
            className="h-14 text-xl font-bold rounded-xl shrink-0"
            style={{ background: "#ffa175", borderColor: "#ffa175" }}
            onClick={() => navigate("/connection-pathway")}
          >
            I Agree & Continue
          </Button>
        </Card>
      </div>
    </ConfigProvider>
  );
}
