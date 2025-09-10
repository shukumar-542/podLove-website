import img from "../../assets/bg.png";
// import client1 from "../../assets/find1.png";
// import client2 from "../../assets/find2.png";
// import client3 from "../../assets/find3.png";
import client4 from "../../assets/x.png";
import client5 from "../../assets/y.png";
import client6 from "../../assets/z.png";

const FindVoiceMatch = () => {
  const data = [
    {
      img: client4,
      title: "Intentional matches for serious relationships",
      des: "Discover attraction through personality and conversation. Profile photos stay private.",

    },
    {
      img: client5,
      title: "Skip the small talk",
      des: "Connect through hosted conversations that reveal real compatibility and reduce first‑date anxiety.",
    },
    {
      img: client6,
      title: "Quality over quantity matching",
      des: "Blind matching aligns values and relationship goals for adults 35–55. No endless swiping.",
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${img})` }} className="py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-[#6B4431] text-2xl md:text-4xl font-bold">Authentic Connections Through Meaningful Conversations</h1>
        {/* <h1 className="text-[#6B4431] text-4xl font-bold">Find Your Voice, Find Your Match.</h1> */}
        <p className="p-2 md:px-0 text-center text-[#333333] mt-2 font-poppins">
          Experience genuine chemistry through guided video podcast sessions designed for authentic dialogue between emotionally mature singles
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.map((user, index) => {
            return (
              <div key={index} className=" mx-auto">
                <div className="py-10 rounded-md">
                  <img
                    src={user?.img}
                    className="max-h-[374px]  rounded-2xl  mx-auto "

                    alt=""
                  />
                  <h1 className="text-[24px] font-bold text-[#333333] my-4 text-center">{user?.title}</h1>
                  <p className="">{user?.des}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default FindVoiceMatch;
