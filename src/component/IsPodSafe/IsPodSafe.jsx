
// import bg from "../../assets/isSafe.png";
// const IsPodSafe = () => {
//   return (
//     <div style={{ backgroundImage: `url(${bg})` }}>
//       <div className='container mx-auto text-white py-10 px-4 md:px-0'>
//         <h1 className='text-2xl font-bold mb-5'>Is PodLove Safe?</h1>
//         <p className='max-w-[690px] leading-7'>We follow AWS best practices for security, ensuring that your data is protected at all stages. The information we collect is used exclusively for matching purposes. We never sell or share your data with third parties. Your privacy is our priority, and we are committed to safeguarding it. Rest assured, your data is safe with us.</p>
//       </div>
//     </div>
//   )
// }

// export default IsPodSafe

import bg from "../../assets/isSafe.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const IsPodSafe = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="py-14">
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mb-8">
          Follow @podloveofficial to see the human side of love: vulnerability,
          courage, and genuine connection in action.
        </h1>

        <div className="flex justify-center gap-6 mt-6">
          <Link
            to="https://www.instagram.com/podloveofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
          >
            <FaInstagram className="w-5 h-5" />
            Instagram
          </Link>

          <Link
            to="https://www.tiktok.com/@podloveofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            <FaTiktok className="w-5 h-5" />
            TikTok
          </Link>

          <Link
            to="https://www.youtube.com/channel/UClAZxKDsujl4sJyyztp0j2A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition"
          >
            <FaYoutube className="w-5 h-5" />
            YouTube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IsPodSafe;
