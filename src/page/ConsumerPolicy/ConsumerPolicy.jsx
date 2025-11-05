import { useGetConsumerPolicyQuery } from "../../redux/Api/AuthApi";

const ConsumerPolicy = () => {
  const { data: getConsumer } = useGetConsumerPolicyQuery();
  return (
    <div className="bg-[#FAF2EF]">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
          Consumer Policy
        </h1>

        <div
          className="text-base text-black font-poppins"
          style={{ backgroundColor: "#FAF2EF" }}
          dangerouslySetInnerHTML={{
            __html: getConsumer?.data?.text || "",
          }}
        />

        {/* <p className="text-xl mb-5 font-bold font-poppins">
          Effective Date: April 1, 2025
        </p>
        <p className="font-poppins mb-5">
          This Consumer Health Data Privacy Policy supplements the PodLove
          Privacy Policy and applies specifically to the collection and handling
          of Consumer Health Data as defined under applicable laws, including
          but not limited to the Washington My Health My Data Act (MHMDA). This
          policy is intended to comply with the requirements of the Washington
          My Health My Data Act (MHMDA) and may also apply to consumers in other
          jurisdictions with similar legal protections for health-related data.
          By using the PodLove app or website, you agree to the terms of this
          policy where applicable.
        </p>

        <p className="text-xl mb-5 font-bold font-poppins">
          1. What is Consumer Health Data?
        </p>
        <div className="font-poppins space-y-3">
          <p>
            For purposes of this policy, "Consumer Health Data" includes any
            personal information that identifies or can be reasonably linked to
            a consumer and relates to their:
          </p>
          <p>
            - Mental or emotional health (e.g., emotional availability,
            trauma-related questions)
          </p>
          <p>
            {" "}
            - Sexual orientation, reproductive health, or intimate relationships
          </p>
          <p>
            - Biometric or behavioral indicators (e.g., voice analysis, dating
            preferences)
          </p>
          <p>- Health conditions or treatments</p>
          <p>
            - Health-related inferences made by our AI or algorithmic systems
          </p>
        </div>

        <p className="text-xl mb-5 font-bold font-poppins mt-5">
          2. What Health Data Does PodLove Collect?
        </p>
        <p>
          PodLove may collect the following consumer health-related information:
        </p>
        <div className="font-poppins space-y-3">
          <p>
            - User responses to vetting and compatibility questionnaires that
            may reveal emotional or mental wellness, sexual history, or
            relationship patterns
          </p>
          <p>
            - Optional self-disclosures about trauma, emotional availability, or
            preferences
          </p>
          <p>
            - Data inferred by our AI systems to enhance compatibility matching
            (e.g., attachment style, intimacy readiness)
          </p>
          <p>
            This data is collected only with your affirmative opt-in consent and
            used solely for the purpose of matching you with compatible partners
            and enhancing your dating experience..
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xl mb-5 font-bold font-poppins mt-5">
            3. How We Use Consumer Health Data
          </p>
          <p>We use this data for the following:</p>
          <p className="font-poppins space-y-8 ">
            - Compatibility assessments and personalized match suggestions
          </p>
          <p>- Enhancing your experience during PodLove podcast episodes</p>
          <p>
            - Research and analytics to improve our algorithms (in de-identified
            form)
          </p>
          <p>We do not:</p>
          <p>
            - Use consumer health data for marketing without explicit, separate
            consent
          </p>
          <p>- Sell or share this data with advertisers or data brokers</p>
        </div>
        <div className="space-y-3">
          <p className="text-xl mb-5 font-bold font-poppins mt-5">
            4. Sharing of Consumer Health Data
          </p>
          <p>
            We do not sell or share consumer health data with third parties
            except:
          </p>
          <p className="font-poppins space-y-8 ">
            - With your explicit, opt-in consent
          </p>
          <p>
            - With vendors or service providers under strict data protection
            agreements (e.g., AI processors, podcast recording services)
          </p>
          <p>- As required by law, such as to respond to legal requests</p>
        </div>

        <div className="space-y-3">
          <p className="text-xl mb-5 font-bold font-poppins mt-5">
            5. Your Rights Over Consumer Health Data
          </p>
          <p>
            If you reside in Washington or a state with similar laws, you have:
          </p>
          <p className="font-poppins space-y-8 ">
            - Right to Know what consumer health data we collect and how we use
            it
          </p>
          <p> Right to Access and obtain a copy of your health-related data</p>
          <p>
            - Right to Withdraw Consent to processing your consumer health data
            at any time
          </p>
          <p>- Right to Delete your consumer health data from our systems</p>
        </div>

        <p className="py-5 font-semibold">
          To exercise these rights, contact us at support@podlove.co with the
          subject line: “Consumer Health Data Request”
        </p>

        <div className="space-y-3">
          <p className="text-xl mb-5 font-bold font-poppins mt-5">
            6. How We Protect This Data
          </p>
          <p>We implement:</p>
          <p className="font-poppins space-y-8 ">
            - Data minimization (only collecting what we need)
          </p>
          <p> - Encryption in transit and at rest</p>
          <p>- Strict access controls</p>
          <p>- Vendor agreements to ensure secure data handling</p>
        </div>

        <p className="py-5 text-xl ">We also prohibit geofencing technologies around sensitive healthcare locations, in compliance with MHMDA.</p>

        <div className="space-y-3">
          <p className="text-xl mb-5 font-bold font-poppins mt-5">
          7. Changes to This Policy
          </p>
          <p className="font-poppins space-y-8 ">
          We may update this policy as required by law or changes in our data practices. Any updates will be posted with a revised effective date.
          </p>
          
        </div>

        <div className="space-y-3">
          <p className="text-xl mb-5 font-bold font-poppins mt-5">
          8. Contact Us
          </p>
          <p className="font-poppins space-y-8 ">
          If you have questions about this policy or your health data rights, contact:
          </p>

        
          
        </div>
        <p className="mt-5">PodLove LLC  </p>
          <p>Email: support@podlove.co  </p>
          <p>Subject: “Health Data Privacy Inquiry”</p>

          <p className="py-5">Your trust matters to us. PodLove is committed to protecting your most sensitive data — with compassion, clarity, and care.</p>*/}
      </div>
    </div>
  );
};

export default ConsumerPolicy;
