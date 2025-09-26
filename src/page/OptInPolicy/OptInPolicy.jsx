import { useGetSmsPrivacyQuery } from "../../redux/Api/AuthApi";


const OptInPolicy = () => {
  const { data } = useGetSmsPrivacyQuery()

  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">

        <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
          SMS Consent & Opt-In-Policy
        </h1>

        <div
          className="text-base text-black font-poppins"
          style={{ backgroundColor: "#FAF2EF" }}
          dangerouslySetInnerHTML={{
            __html: data?.data || "",
          }}
        />
        {/* <div className="bg-[#FFA175] p-4">
          <p className="text-black text-2xl md:text-4xl font-bold">SMS Consent &</p>
          <p className="text-white text-2xl md:text-4xl font-bold mt-2">Opt -in Policy</p>
          <p className="text-[#6B4431] text-2xl md:text-4xl font-bold mt-4">
            Welcome to PodLove!
          </p>
        </div>
        <div className="px-4 pb-10 pt-4">
          <p className="text-xl mt-4">
            At PodLove, we respect your privacy and ensure that all SMS
            communications comply with industry regulations. Below is our SMS
            consent policy:
          </p> */}

        {/* Program Description */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Program Description</p>
          <p className="text-xl mt-2">
            With your consent, PodLove may send SMS messages about account security
            (e.g., OTP codes), service updates, reminders, and marketing (if you opt
            into marketing).
          </p>

          {/* How Users Opt-In */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">How to Opt-In</p>
          <p className="text-xl mt-2">
            Users can opt-in by:
          </p>
          <ul className="mt-3 list-disc list-inside">
            <li className="flex items-center mt-1 gap-2">
              <IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" />
              <span className="text-xl">Checking the SMS consent box during signup or in Settings.</span>
            </li>
            <li className="flex items-center mt-1 gap-2">
              <IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" />
              <span className="text-xl">Entering your mobile number for OTP/security purposes.</span>
            </li>
            <li className="flex items-center mt-1 gap-2">
              <IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" />
              <span className="text-xl">Texting a provided keyword to our sending number.</span>
            </li>
          </ul>  */}

        {/* Message Frequency */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Message Frequency</p>
          <p className="text-xl mt-2">
            Message frequency varies by user activity. We aim to keep it reasonable.
          </p>

          {/* Opt-out Instructions */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Opt-Out</p>
          <p className="mt-2 text-xl pb-4">
            Users can opt out of SMS communications at any time by replying &quot;STOP&quot; to any message. You’ll get a one-time confirmation.
            You can re-opt-in any time.
          </p> */}

        {/* Help */}
        {/* <p className="text-[#6B4431] mt-4 text-2xl md:text-3xl font-bold">Help</p>
          <p className="mt-2 text-xl ">
            For any questions or concerns, please contact us at <a href="mailto:support@podlove.co" className="text-[#FFA175]">support@podlove.co</a>.
          </p> */}

        {/* Carrier Disclosure */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Carrier Disclosure</p>
          <p className="text-xl mt-2">
            Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.
          </p> */}

        {/* Eligibility */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Eligibility</p>
          <p className="text-xl mt-2">
            U.S. mobile numbers only at this time. You must be 18+.
          </p> */}

        {/* Privacy */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Privacy</p>
          <p className="text-xl mt-2">
            We use your number to provide the Service and (if you opt in) to send marketing texts. See our Privacy Policy for details.
            We do not sell your personal data.
          </p> */}

        {/* Example of What Twilio Wants to See on Your Page */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">Example of What Twilio Wants to See on Your Page</p>
          <p className="mt-2 text-xl">- A heading like <em>&quot;How We Collect SMS Opt-In&quot;</em></p>
          <p className="mt-2 text-xl">- A step-by-step explanation:</p>
          <p className="mt-2 text-xl">1. Users sign up via the PodLove app or website.</p>
          <p className="mt-2 text-xl">2. They check a box that says <em>&quot;I agree to receive SMS updates about my matches and podcast invites.&quot;</em></p>
          <p className="mt-2 text-xl">3. They receive an initial confirmation SMS to verify their consent.</p>
          <p className="mt-2 text-xl">- Screenshots of the app signup page with the checkbox for SMS consent.</p> */}

        {/* Final Section */}
        {/* <p className="text-[#6B4431] mt-6 text-2xl md:text-3xl font-bold">How to Opt-Out</p>
          <p className="mt-2 text-xl pb-6">
            Users can opt out of SMS communications at any time by replying &quot;STOP&quot; to any message. For any questions or concerns, please contact us at support@podlove.co.
          </p>
        </div>  */}
      </div>
    </div>
  );
};

export default OptInPolicy;
