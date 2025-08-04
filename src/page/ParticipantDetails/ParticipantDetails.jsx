import { useGetPodCastDetailsQuery } from "../../redux/Api/AuthApi";
import { useParams } from "react-router";
// import img from '../../assets/chat.png'

const ParticipantDetails = () => {
  // const navigate = useNavigate()
  const { id } = useParams()
  const { data: getPodcastDetails } = useGetPodCastDetailsQuery();
  const participants = getPodcastDetails?.data?.podcast?.participants || [];

  const participant = participants.find(p => p._id === id);


  // const handleChat = () => {
  //   navigate(`/chat/${id}`)
  // }


  return (
    <div className=" bg-[#F7E8E1]">
      <div className="container mx-auto py-20  max-w-3xl">
        <p className="text-[#FFA175] text-center text-2xl my-10">
          {participant?.name}
        </p>
        <p className="border border-[#FFA175] max-w-3xl mx-auto p-5 rounded-md">
          {participant?.bio ? participant?.bio : "No Bio Available"}
        </p>
        <p className="text-2xl font-semibold mt-8 mb-5">Interest:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto gap-5">
          {
            participant?.interests?.map((int, i) => {
              return (
                <p key={i + 1} className="bg-white text-center rounded-lg py-2 border border-[#FFA175]">{int}</p>

              )
            })
          }
        </div>
        {/* <div className="  flex justify-center mt-8">
          <div onClick={() => handleChat()} className="bg-[#FFA175] p-4 cursor-pointer rounded-full">

            <img src={img} className="size-16" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ParticipantDetails;
