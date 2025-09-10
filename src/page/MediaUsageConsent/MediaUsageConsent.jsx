import { useState } from "react";

const MediaUsageConsent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-[#FFA175] p-4">
          <p className="text-black text-2xl md:text-4xl font-bold">
            You&apos;re About to Be Seen & Heard
          </p>
          <p className="text-white text-2xl md:text-4xl font-bold mt-2">
            Media Usage Consent
          </p>
        </div>

        {/* Body Content */}
        <div className="px-4 pb-10 pt-4">
          <p className="text-xl mt-4">
            On PodLove, real connection starts with real conversation. We celebrate your voice—and with your permission, we may feature clips from your videos on the app or in our community.
          </p>

          <p className="text-xl mt-6">
            Your{" "}
            <a href="https://podlove.co/privacy" className="text-[#FFA175]">
              privacy
            </a>{" "}
            matters. We’ll never use your content in a way that degrades you. By continuing, you agree that PodLove owns the rights to this content for public and promotional use.
          </p>

          {/* Consent Checkbox */}
          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              id="mediaConsentCheckbox"
              className="mr-2"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="mediaConsentCheckbox" className="text-xl">
              “I consent to PodLove using my video content for platform visibility, community highlights, and promotional purposes.”
            </label>
          </div>

          {/* Links Section */}
          <div className="flex justify-between w-full mt-6">
            <a
              href="https://podlove.co/privacy"
              className="text-[#FFA175] hover:underline text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="https://podlove.co/do-not-sell"
              className="text-[#FFA175] hover:underline text-sm"
            >
              Do Not Sell My Data
            </a>
            <a
              href="https://podlove.co/health-consent"
              className="text-[#FFA175] hover:underline text-sm"
            >
              App Health Consent
            </a>
          </div>

          {/* CTA Button */}
          <button
            className="w-full py-3 mt-8 bg-[#FFA175] text-white text-xl font-bold rounded-lg"
            disabled={!isChecked}
          >
            Continue
          </button>

          {/* Behavior & Requirements Section */}
          <div className="mt-10">
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
          </div>

          {/* Public-Facing Version for Website */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">PodLove Video Consent Disclosure (Website Copy)</h2>
            <p className="mt-4">
              PodLove celebrates real conversations and real people. When you participate in a video on PodLove, you agree that we may use that content on our platform, in marketing materials, or for community storytelling. We believe in using your voice with integrity—and we never use content in a way that misrepresents you.
            </p>

            <p className="mt-4">
              By creating a profile and submitting videos, you grant PodLove full rights to use your video content for public-facing and promotional purposes.
            </p>

            <p className="mt-4">
              Have questions? Email us at <a href="mailto:support@podlove.co" className="text-[#FFA175]">support@podlove.co</a>.
            </p>

            <div className="mt-4">
              <span className="text-xl">🔗</span>
              <a href="https://podlove.co/privacy" className="text-[#FFA175] hover:underline ml-2">Privacy Policy</a> | 
              <a href="https://podlove.co/do-not-sell" className="text-[#FFA175] hover:underline ml-2">Do Not Sell My Data</a> | 
              <a href="https://podlove.co/health-consent" className="text-[#FFA175] hover:underline ml-2">App Health Consent</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaUsageConsent;
