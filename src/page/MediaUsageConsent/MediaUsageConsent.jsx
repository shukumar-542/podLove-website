import { useGetMediaPrivacyQuery } from "../../redux/Api/AuthApi";


const MediaUsageConsent = () => {
  const { data } = useGetMediaPrivacyQuery()
  return (
    <div className="bg-[#F7E8E1] min-h-[70vh]">
      <div className="px-3 md:container mx-auto">

        <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
          Media Usage Consent
        </h1>

        <div
          className="text-base text-black font-poppins"
          style={{ backgroundColor: "#FAF2EF" }}
          dangerouslySetInnerHTML={{
            __html: data?.data?.text || "",
          }}
        />
        {/* Header Section */}
        {/* <div className="bg-[#FFA175] p-4">
          <p className="text-black text-2xl md:text-4xl font-bold">
            You&apos;re About to Be Seen & Heard
          </p>
          <p className="text-white text-2xl md:text-4xl font-bold mt-2">
            Media Usage Consent
          </p>
        </div>

        {/* Body Content */}
        {/* <div className="px-4 pb-10 pt-4">
          <p className="text-xl mt-4">
            On PodLove, real connection starts with real conversation. We celebrate your voice—and with your permission, we may feature clips from your videos on the app or in our community.
          </p>

          <p className="text-xl mt-6">
            Your{" "}
            <a href="https://podlove.co/privacy-policy" className="text-[#FFA175]">
              privacy
            </a>{" "}
            matters. We’ll never use your content in a way that degrades you. By continuing, you agree that PodLove owns the rights to this content for public and promotional use.
          </p> */}

        {/* Consent Checkbox
          <div className="flex items-center mt-6">

            <h2 className="text-xl">
              “I consent to PodLove using my video content for platform visibility, community highlights, and promotional purposes.”
            </h2>
          </div>

          {/* Links Section */}
        {/* <div className="mt-6">
            <Link
              to="https://podlove.co/privacy-policy"
              className="text-[#FFA175] hover:underline text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="https://podlove.co/do-not-sell-or-share-my-personal-info"
              className="text-[#FFA175] hover:underline text-sm"
            >
              Do Not Sell My Data
            </Link>
            <Link
              to="https://podlove.co/consumer-health-data-privacy-policy"
              className="text-[#FFA175] hover:underline text-sm"
            >
              App Health Consent
            </Link>
          </div>  */}

        {/* Behavior & Requirements Section */}
        {/* <div className="mt-10">
            <h2 className="text-2xl font-bold">Behavior & Requirements (App & Web)</h2>
            <ul className="list-disc list-inside mt-4">
              <li>❌ Do not allow user to proceed unless checkbox is selected.</li>
              <li>✅ Store user consent as a timestamped value in user profile metadata.</li>
              <li>🕒 Optional: Log this in your analytics or backend for audit trail.</li>
              <li>🔁 This screen should appear before they begin creating a profile.</li>
              <li>📱 For mobile: Implement as a native screen in the onboarding flow.</li>
              <li>💻 For web: Add this as a full-page or modal step in your signup journey (depending on your current UX stack).</li>
              <li>🔗 Link it as a dedicated &quot;Video Consent&quot; page.</li>
            </ul>
          </div> */}

        {/* Public-Facing Version for Website */}
        {/* <div className="mt-10">
            <h2 className="text-2xl font-bold">PodLove Video Consent Disclosure (Website Copy)</h2>
            <p className="mt-4">
              PodLove celebrates real conversations and real people. When you participate in a video on PodLove, you agree that we may use that content on our platform, in marketing materials, or for community storytelling. We believe in using your voice with integrity—and we never use content in a way that misrepresents you.
            </p>

            <p className="mt-4">
              By creating a profile and submitting videos, you grant PodLove full rights to use your video content for public-facing and promotional purposes.
            </p>

            <p className="mt-4">
              Have questions? Email us at <Link to="mailto:support@podlove.co" className="text-[#FFA175]">support@podlove.co</Link>.
            </p>

            <div className="mt-4">
              <span className="text-xl">🔗</span>
              <Link to="https://podlove.co/privacy-policy" className="text-[#FFA175] hover:underline ml-2">Privacy Policy</Link> | 
              <Link to="https://podlove.co/do-not-sell-or-share-my-personal-info" className="text-[#FFA175] hover:underline ml-2">Do Not Sell My Data</Link> | 
              <Link to="https://podlove.co/consumer-health-data-privacy-policy" className="text-[#FFA175] hover:underline ml-2">App Health Consent</Link>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default MediaUsageConsent;
