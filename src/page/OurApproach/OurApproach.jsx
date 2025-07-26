import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";

const OurApproach = () => {
    return (
        <div className="p-6 bg-[#FCEDE6] min-h-screen flex justify-center items-center">
            <div className=" max-w-3xl w-full text-[#333] font-sans ">
                <h1 className="text-center text-2xl font-bold mb-6">Our approach to love</h1>

                <h2 className=" text-xl font-bold mb-4">Welcome to our pod!</h2>
                <p className="mb-4 text-sm">
                    PodLove fosters deeper connections and intentional dating, creating a platform where genuine relationships blossom through mindful, podcast-style conversations. We envision a world where meaningful relationships are built on open communication, emotional compatibility, and mutual respect. By accessing or using our services, you agree to these Terms of Use, which outline your responsibilities and rights while engaging with PodLove.
                </p>

                <h3 className=" font-bold mb-2">Commitment to Safety and Respect</h3>
                <ul className="list-disc list-inside text-sm mb-4">
                    <li>Actively Respect: Treat all participants with dignity and kindness, regardless of background or beliefs.</li>
                    <li>Safety Awareness: Uphold the importance of consent and personal boundaries in all interactions.</li>
                    <li>Inclusivity: Embrace diversity and create a welcoming environment for all users.</li>
                </ul>

                <h3 className="font-bold mb-2">User Responsibilities</h3>
                <p className="text-sm mb-2">By using PodLove, you agree to:</p>
                <ul className="list-disc list-inside text-sm mb-4">
                    <li>Honest Representation</li>
                    <li>Genuine Intention</li>
                    <li>Consent and Communication</li>
                    <li>Respect for Privacy</li>
                </ul>

                <h3 className=" font-bold mb-2">Safety Measures</h3>
                <ul className="list-disc list-inside text-sm mb-4">
                    <li>Comprehensive Vetting Process</li>
                    <li>AI Moderation</li>
                    <li>Reporting System</li>
                    <li>Support Resources</li>
                </ul>

                <h3 className=" font-bold mb-2">Use of the Platform</h3>
                <ul className="list-disc list-inside text-sm mb-4">
                    <li>PodLove services are intended for users aged 35–60</li>
                    <li>Prohibited for unlawful or harmful activities</li>
                    <li>Comply with terms and policies</li>
                </ul>

                <h3 className=" font-bold mb-2">Privacy and Data Usage</h3>
                <p className="text-sm mb-4">
                    By using PodLove, you consent to our collection, storage, and use of your information in accordance with our Privacy Policy. PodLove does not sell or share your personal information with third parties without your explicit consent.
                </p>

                <h3 className=" font-bold mb-2">Limitation of Liability</h3>
                <p className="text-sm mb-4">
                    While PodLove strives to provide a safe and enjoyable experience, we cannot guarantee outcomes or the behavior of other users.
                </p>

                <h3 className=" font-bold mb-2">Modifications to Terms</h3>
                <p className="text-sm mb-4">
                    PodLove reserves the right to modify these Terms of Use at any time. Continued use implies acceptance.
                </p>

                <h3 className=" font-bold mb-2">Contact us</h3>
                <p className="text-sm mb-4">
                    If you have questions, contact us at <span className=" underline">support@podlove.co</span>
                </p>

                <p className="text-sm mb-6">
                    Failure to follow responsibilities may result in suspension or removal from the platform.
                </p>

                <p className="text-sm mb-6 font-medium">
                    By using PodLove, you agree to abide by these Terms of Use and help create a safe, respectful, and meaningful dating experience for everyone.
                </p>


                
                <div className="flex justify-center">
                    <Link to={"/terms-of-use"}>
                        <AuthButton className={"py-2"}>
                            Next
                        </AuthButton>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default OurApproach;
