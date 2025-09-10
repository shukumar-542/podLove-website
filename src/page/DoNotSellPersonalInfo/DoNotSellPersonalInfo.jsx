const DoNotSellPersonalInfo = () => {
  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-[#FFA175] p-4">
          <p className="text-black text-2xl md:text-4xl font-bold">
            Do Not Sell or Share My Personal Information
          </p>
          <p className="text-white text-2xl md:text-4xl font-bold mt-2">
            Effective Date: April 1, 2025
          </p>
        </div>

        {/* Body Content */}
        <div className="px-4 pb-10 pt-4">
          <p className="text-xl mt-4">
            At PodLove, we respect your right to control your personal information. Under laws such as the California Consumer Privacy Act (CCPA/CPRA) and other U.S. state privacy laws, you may have the right to opt-out of the &quot;sale&quot; or &quot;sharing&quot; of your personal data, especially for targeted advertising purposes.
          </p>

          <p className="text-xl mt-6">
            This page explains what that means and how you can exercise your rights.
          </p>

          <h2 className="text-2xl mt-6 font-bold">What Does &quot;Sell&quot; or &quot;Share&quot; Mean?</h2>
          <p className="text-xl mt-4">
            We do not sell your personal information for money. However, we may use third-party tools and advertising partners that collect data about your behavior on our app or website to help deliver more relevant ads to you. This kind of data-sharing can be considered a &quot;sale&quot; or &quot;share&quot; under certain state laws.
          </p>

          <p className="text-xl mt-4 font-semibold">Examples of data that may be collected:</p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>App usage behavior</li>
            <li>Device or browser information</li>
            <li>Match preferences or interactions</li>
            <li>Location data (approximate)</li>
          </ul>

          <p className="text-xl mt-4">
            These tools may include cookies, SDKs, or tracking pixels.
          </p>

          <h2 className="text-2xl mt-6 font-bold">Your Rights</h2>
          <p className="text-xl mt-4">
            If you reside in California, Colorado, Virginia, Connecticut, or Utah, you may:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Opt-out of the sale or sharing of your personal information</li>
            <li>Request information about how your data is used</li>
            <li>Request deletion or correction of your data (see our <a href="#" className="text-[#FFA175]">Privacy Policy</a>)</li>
          </ul>

          <h2 className="text-2xl mt-6 font-bold">How to Opt Out</h2>
          <p className="text-xl mt-4">
            You can opt-out in the following ways:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>
              <strong>1. Privacy Settings Panel (Coming Soon)</strong> – You’ll be able to adjust ad personalization and third-party tracking preferences directly in your profile or app settings.
            </li>
            <li>
              <strong>2. Email Request</strong> – Contact us at <a href="mailto:support@podlove.co" className="text-[#FFA175]">support@podlove.co</a> with the subject line: &quot;Do Not Sell or Share My Personal Information&quot; and include your name and the email associated with your PodLove account.
            </li>
            <li>
              <strong>3. Browser Settings</strong> – For web use, you can also adjust browser-based ad settings or install tools like the <a href="https://globalprivacycontrol.org/" className="text-[#FFA175]">Global Privacy Control (GPC)</a>, which we honor where legally required.
            </li>
            <li>
              <strong>4. Industry Tools</strong> – Use these tools to opt out of interest-based advertising:
              <ul className="list-inside mt-2">
                <li>
                  <a href="https://optout.aboutads.info/" className="text-[#FFA175]">YourAdChoices (DAA)</a>
                </li>
                <li>
                  <a href="https://optout.networkadvertising.org/" className="text-[#FFA175]">Network Advertising Initiative (NAI)</a>
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl mt-6 font-bold">Important Notes</h2>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Opting out does not mean you’ll stop seeing ads. It means the ads won’t be personalized based on your behavior.</li>
            <li>If you use multiple browsers or devices, you’ll need to opt-out on each one individually.</li>
            <li>We will honor opt-out requests within the timeframe required by applicable law.</li>
          </ul>

          <h2 className="text-2xl mt-6 font-bold">Contact Us</h2>
          <p className="text-xl mt-4">
            If you have questions about this policy or your data rights, reach out to:
          </p>

          <p className="text-xl mt-4 font-semibold">PodLove LLC</p>
          <p className="text-xl">
            Email: <a href="mailto:support@podlove.co" className="text-[#FFA175]">support@podlove.co</a>
          </p>
          <p className="text-xl mt-4">
            Subject: &quot;Privacy Inquiry&quot;
          </p>

          <p className="text-xl mt-6">
            Thank you for trusting PodLove. Your privacy matters to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoNotSellPersonalInfo;
