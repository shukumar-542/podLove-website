// import music from '../../assets/music.png'
import { useGetVideoQuery } from "../../redux/Api/AuthApi";

const ListenAudio = () => {
  const { data, isLoading } = useGetVideoQuery();

  return (
    <div className="container mx-auto">
      <h1 className="text-[#6B4431] text-center text-2xl md:text-4xl font-bold my-10">
        Listen to our latest love stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mb-10">
        {/* Loop over video data and display video player */}
        {isLoading
          ? // Skeleton loader for each video card
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="border border-[#FFA175] mx-auto w-full p-10 rounded-md animate-pulse"
              >
                <div className="bg-gray-300 w-full h-52 rounded-md"></div>
                <div className="bg-gray-300 w-3/4 h-6 mt-4 rounded-md"></div>
              </div>
            ))
          : data?.data?.map((videoItem) => (
              <div
                key={videoItem._id}
                className="border border-[#FFA175] mx-auto p-2 rounded-md"
              >
                <video controls width="100%">
                  <source src={videoItem?.presignedUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListenAudio;
