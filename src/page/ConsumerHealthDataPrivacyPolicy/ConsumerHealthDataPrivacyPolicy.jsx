const ConsumerHealthDataPrivacyPolicy = () => {
  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-[#FFA175] p-4">
          <p className="text-black text-2xl md:text-4xl font-bold">
            Consumer Health Data Privacy Policy
          </p>
          <p className="text-white text-2xl md:text-4xl font-bold mt-2">
            Effective Date: August 2025
          </p>
        </div>

        {/* Body Content */}
        <div className="px-4 pb-10 pt-4">
          <p className="text-xl mt-4">
            This Consumer Health Data Privacy Policy supplements the PodLove Privacy Policy and applies specifically to the collection and handling of Consumer Health Data as defined under applicable laws, including but not limited to the Washington My Health My Data Act (MHMDA).
          </p>

          <p className="text-xl mt-6">
            This policy is intended to comply with the requirements of the Washington My Health My Data Act (MHMDA) and may also apply to consumers in other jurisdictions with similar legal protections for health-related data.
          </p>

          <p className="text-xl mt-6">
            By using the PodLove app or website, you agree to the terms of this policy where applicable.
          </p>

          {/* What is Consumer Health Data Section */}
          <h2 className="text-2xl mt-8 font-bold">1. What is Consumer Health Data?</h2>
          <p className="text-xl mt-4">
            For purposes of this policy, &quot;Consumer Health Data&quot; includes any personal information that identifies or can be reasonably linked to a consumer and relates to their:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Mental or emotional health (e.g., emotional availability, trauma-related questions)</li>
            <li>Sexual orientation, reproductive health, or intimate relationships</li>
            <li>Biometric or behavioral indicators (e.g., voice analysis, dating preferences)</li>
            <li>Health conditions or treatments</li>
            <li>Health-related inferences made by our AI or algorithmic systems</li>
          </ul>

          {/* What Health Data Does PodLove Collect? Section */}
          <h2 className="text-2xl mt-8 font-bold">2. What Health Data Does PodLove Collect?</h2>
          <p className="text-xl mt-4">
            PodLove may collect the following consumer health-related information:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>User responses to vetting and compatibility questionnaires that may reveal emotional or mental wellness, sexual history, or relationship patterns</li>
            <li>Optional self-disclosures about trauma, emotional availability, or preferences</li>
            <li>Data inferred by our AI systems to enhance compatibility matching (e.g., attachment style, intimacy readiness)</li>
          </ul>

          <p className="text-xl mt-4">
            This data is collected only with your affirmative opt-in consent and used solely for the purpose of matching you with compatible partners and enhancing your dating experience.
          </p>

          {/* How We Use Consumer Health Data Section */}
          <h2 className="text-2xl mt-8 font-bold">3. How We Use Consumer Health Data</h2>
          <p className="text-xl mt-4">
            We use this data for the following:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Compatibility assessments and personalized match suggestions</li>
            <li>Enhancing your experience during PodLove podcast episodes</li>
            <li>Research and analytics to improve our algorithms (in de-identified form)</li>
          </ul>

          <p className="text-xl mt-4">
            We do not:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Use consumer health data for marketing without explicit, separate consent</li>
            <li>Sell or share this data with advertisers or data brokers</li>
          </ul>

          {/* Sharing of Consumer Health Data Section */}
          <h2 className="text-2xl mt-8 font-bold">4. Sharing of Consumer Health Data</h2>
          <p className="text-xl mt-4">
            We do not sell or share consumer health data with third parties except:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>With your explicit, opt-in consent</li>
            <li>With vendors or service providers under strict data protection agreements (e.g., AI processors, podcast recording services)</li>
            <li>As required by law, such as to respond to legal requests</li>
          </ul>

          {/* Your Rights Over Consumer Health Data Section */}
          <h2 className="text-2xl mt-8 font-bold">5. Your Rights Over Consumer Health Data</h2>
          <p className="text-xl mt-4">
            If you reside in Washington or a state with similar laws, you have:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Right to Know what consumer health data we collect and how we use it</li>
            <li>Right to Access and obtain a copy of your health-related data</li>
            <li>Right to Withdraw Consent to processing your consumer health data at any time</li>
            <li>Right to Delete your consumer health data from our systems</li>
          </ul>

          <p className="text-xl mt-4">
            To exercise these rights, contact us at{" "}
            <a href="mailto:support@podlove.co" className="text-[#FFA175]">
              support@podlove.co
            </a>{" "}
            with the subject line: “Consumer Health Data Request”
          </p>

          {/* How We Protect This Data Section */}
          <h2 className="text-2xl mt-8 font-bold">6. How We Protect This Data</h2>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Data minimization (only collecting what we need)</li>
            <li>Encryption in transit and at rest</li>
            <li>Strict access controls</li>
            <li>Vendor agreements to ensure secure data handling</li>
          </ul>

          <p className="text-xl mt-4">
            We also prohibit geofencing technologies around sensitive healthcare locations, in compliance with MHMDA.
          </p>

          {/* Changes to This Policy Section */}
          <h2 className="text-2xl mt-8 font-bold">7. Changes to This Policy</h2>
          <p className="text-xl mt-4">
            We may update this policy as required by law or changes in our data practices. Any updates will be posted with a revised effective date.
          </p>

          {/* Contact Us Section */}
          <h2 className="text-2xl mt-8 font-bold">8. Contact Us</h2>
          <p className="text-xl mt-4">
            If you have questions about this policy or your health data rights, contact:
          </p>

          <p className="text-xl mt-4 font-semibold">PodLove LLC</p>
          <p className="text-xl">
            Email:{" "}
            <a href="mailto:support@podlove.co" className="text-[#FFA175]">
              support@podlove.co
            </a>
          </p>

          <p className="text-xl mt-4">
            Subject: “Health Data Privacy Inquiry”
          </p>

          <p className="text-xl mt-6">
            Your trust matters to us. PodLove is committed to protecting your most sensitive data — with compassion, clarity, and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsumerHealthDataPrivacyPolicy;
