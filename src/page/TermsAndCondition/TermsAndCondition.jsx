import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { useGetTermsConditionQuery } from "../../redux/Api/AuthApi";

const TermsAndCondition = () => {
  const { data: getTermsCondition } = useGetTermsConditionQuery();
  console.log(getTermsCondition?.data?.text);
  return (
    <div className="bg-[#FAF2EF]">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
          Terms Of Use & Conditions
        </h1>

        <div
          className="text-base text-black font-poppins"
          style={{ backgroundColor: "#FAF2EF" }}
          dangerouslySetInnerHTML={{
            __html: getTermsCondition?.data?.text || "",
          }}
        />

        {/* <p className="mb-5 font-semibold font-poppins">Welcome To PodLove!</p>
        <p className="font-poppins mb-5">
        
          By using the PodLove application and services or accessing any of the
          content provided on the PodLove platform, you agree to the following
          Terms of Use ("Terms"). Please read these Terms carefully before using
          our services. If you disagree with these Terms, you must not use the
          PodLove app or any of its associated services.
        </p>

        <p className="text-xl mb-5 font-bold font-poppins">
          1. Acceptance of Terms
        </p>
        <p>
          By creating an account or using the PodLove app, you acknowledge that
          you have read, understood, and agree to be bound by these Terms, as
          well as our Privacy Policy. These Terms constitute a legally binding
          agreement between you and PodLove LLC ("PodLove," "we," "our," or
          "us"). If you do not accept and agree to these Terms, you are not
          authorized to use our services.
        </p>

        <p className="text-xl mb-5 font-bold font-poppins mt-5">
          2. Eligibility
        </p>
        <p>
          You must be at least 18 years of age to create an account and use the
          PodLove platform. By using the app, you affirm that you meet this
          requirement and that the information you provide is accurate. You must
          also be legally able to form a binding contract under applicable law.
        </p>
        <p className="text-xl mb-5 font-bold font-poppins mt-5">
        3. Account Registration
        </p>
        <p className="mb-10">
        To use PodLove, you will need to create an account by providing certain personal information, such as your name, age, location, and other demographic data. You agree to provide accurate and truthful information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p> */}
      </div>
      <IsPodSafe />
    </div>
  );
};

export default TermsAndCondition;
