import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import DownloadGuide from "../../component/DownloadGuide/DownloadGuide";
import ClientReview from "../../component/ClientReview/ClientReview";
import HeroSection from "../../component/HeroSection/HeroSection";
import SuccessStory from "../../component/SuccessStory/SuccessStory";
import HowItWork from "../../component/HowItWork/HowItWork";
import FindVoiceMatch from "../../component/FindVoiceMatch/FindVoiceMatch";
import Faq from "../../component/Faq/Faq";
import ListenAudio from "../../component/ListenAudio/ListenAudio";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <SuccessStory />
      <HowItWork/> 
      <FindVoiceMatch/>
      <ListenAudio/>
      <Faq/>
      <ClientReview />
      <DownloadGuide />
      <IsPodSafe />
    </div>
  );
};

export default Home;
