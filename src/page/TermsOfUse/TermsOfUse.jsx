import React from 'react';
import AuthButton from '../../component/AuthButton/AuthButton';
import { Link } from 'react-router';

const TermsOfUse = () => {
  return (
    <div className="p-6 bg-[#FCE7D3] min-h-screen flex justify-center items-center">
      <div className=" rounded-xl p-8 max-w-3xl w-full text-[#333] font-sans ">
        <h1 className="text-center  text-xl font-bold mb-6">
          Ready for Love? Take the First Step!
        </h1>

        <h2 className="text-[#4B4B4B] text-lg font-bold mb-2">User Responsibilities</h2>
        <p className="text-sm mb-2">
          By using PodLove, you agree to:
        </p>
        <ul className="list-disc list-inside text-sm mb-6">
          <li><strong>Honest Representation:</strong> Provide accurate information about yourself during registration and maintain a truthful profile.</li>
          <li><strong>Genuine Intentions:</strong> Use the platform with the genuine desire to form meaningful, long-term connections.</li>
          <li><strong>Consent and Communication:</strong> Respect the boundaries and preferences of others, ensuring that all interactions are consensual.</li>
          <li><strong>Respect for Privacy:</strong> Keep personal and podcast information shared by others confidential.</li>
        </ul>

        <h2 className="text-[#4B4B4B] font-semibold text-sm mb-2">Safety Measures</h2>
        <p className="text-sm mb-2">
          To create a secure and supportive environment, PodLove has implemented the following safety measures:
        </p>
        <ul className="list-disc list-inside text-sm mb-6">
          <li><strong>Comprehensive Vetting Process:</strong> Participants are vetted to ensure alignment with PodLove’s commitment to serious, respectful dating.</li>
          <li><strong>AI Moderation:</strong> Our platform uses advanced technology to identify inappropriate or harmful behavior.</li>
          <li><strong>Reporting System:</strong> Users can report any concerns or violations through the app’s support feature.</li>
          <li><strong>Support Resources:</strong> PodLove provides resources and assistance to users experiencing issues with the platform or other participants.</li>
        </ul>

        <h2 className="text-[#4B4B4B] font-semibold text-sm mb-2">Use of the Platform</h2>
        <p className="text-sm mb-2">
          PodLove’s services, including its app and podcast, are intended for users aged 35–50 who are seeking committed relationships. By using PodLove, you agree to:
        </p>
        <ul className="list-disc list-inside text-sm mb-6">
          <li>Abide by all applicable laws and regulations.</li>
          <li>Refrain from using the platform for any unlawful or harmful activities.</li>
          <li>Comply with all instructions provided by PodLove regarding participation in podcasts, matching, and dating.</li>
        </ul>

        <h2 className="text-[#4B4B4B] font-semibold text-sm mb-2">Privacy and Data Usage</h2>
        <p className="text-sm mb-6">
          Your privacy is important to us. By using PodLove, you consent to our collection, storage, and use of your information as outlined in our [Privacy Policy]. PodLove does not sell or share your personal information with third parties without your explicit consent.
        </p>

        <h2 className="text-[#4B4B4B] font-semibold text-sm mb-2">Limitation of Liability</h2>
        <p className="text-sm mb-6">
          While PodLove strives to provide a safe and enjoyable experience, we cannot guarantee outcomes or the behavior of participants. Users are responsible for their interactions, and PodLove is not liable for any issues arising from connections made through the platform.
        </p>

        <h2 className="text-[#4B4B4B] font-semibold text-sm mb-2">Modifications to Terms</h2>
        <p className="text-sm mb-6">
          PodLove reserves the right to modify these Terms of Use at any time. Changes will be communicated to users, and continued use of the platform constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-[#4B4B4B] font-semibold text-sm mb-2">Contact Us</h2>
        <p className="text-sm mb-6">
          If you have questions or concerns about these Terms of Use, please contact us at <span className="underline">support@podlove.co</span>
        </p>

        <p className="text-sm mb-6">
          Failure to adhere to these responsibilities may result in suspension or removal from the platform.
        </p>

        <p className="text-sm mb-6 font-medium">
          By using PodLove, you agree to abide by these Terms of Use and help create a safe, respectful, and meaningful dating experience for everyone. Welcome to PodLove—let’s build connections that last!
        </p>

        <div className="flex justify-center">
          <Link to={"/relationship-first"}>
            <AuthButton className={"py-2"}>
              Next
            </AuthButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
