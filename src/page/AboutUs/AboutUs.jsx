// import about from "../../assets/about3.png";
// import bg from "../../assets/about-bg.png";
// const AboutUs = () => {
//   return (
//     <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
//       <div className="container mx-auto pb-16">
//         {/* About text */}
//         <div className="bg-[#FFA175] py-10">
//           <h1 className="text-2xl md:text-4xl px-4 font-bold">Discover Who We Are &</h1>
//           <div className="flex items-center  ml-4 mt-5">
//             <div className="bg-[#DC4600] h-2 w-10"></div>
//             <p className="text-white font-bold text-2xl md:text-4xl px-4">What drives us</p>
//           </div>
//         </div>

//         {/* about Image  */}
//         <div className="bg-red-500 w-full">
//           <img
//             src={about}
//             className="w-full  object-cover h-[500px] "
//             alt=""
//           />
//         </div>
//         <div className="py-10 space-y-3 px-2 md:px-0">
//           <p className="text-2xl md:text-4xl font-bold">
//             Get to Know Us: Our <span className="text-[#E8936A]"> Journey</span>
//           </p>
//           <p className="text-2xl md:text-4xl font-bold">
//             And <span className="text-[#E8936A]">Vision</span>{" "}
//           </p>
//         </div>
//         {/* About description */}
//         <h1 className=" font-poppins text-2xl font-semibold mb-2 px-2 md:px-0">
//           Mission:
//         </h1>
//         <p className=" font-poppins mb-5 px-2 md:px-0">
//           To transform the landscape of modern dating by creating a platform where conversation, shared values, and emotional intelligence are the true foundations of connection, empowering individuals to find profound, lasting relationships.
//         </p>
//         <h1 className=" font-poppins text-2xl font-semibold mb-2 px-2 md:px-0">
//           Vision:
//         </h1>
//         <p className=" font-poppins mb-5 px-2 md:px-0">
//           To create a global community where technology elevates human connection, transforming how adults find meaningful relationships by prioritizing authentic dialogue, shared values, and emotional intelligence over superficial interactions.
//         </p>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import about from "../../assets/PodLove-About-Us.png";
import bg from "../../assets/about-bg.png";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="text-slate-900"
      aria-labelledby="aboutus-title"
    >
      <div className="container mx-auto pb-16">
        {/* Hero */}
        {/* <header className="bg-[#FFA175]/95 py-10">
          <h1
            id="aboutus-title"
            className="px-4 text-2xl md:text-4xl font-extrabold tracking-tight"
          >
            Discover Who We Are &
          </h1>
          <div className="flex items-center ml-4 mt-5">
            <span className="bg-[#DC4600] h-2 w-10 rounded" aria-hidden="true" />
            <p className="text-white font-extrabold text-2xl md:text-4xl px-4">
              What drives us
            </p>
          </div>
        </header> */}

        {/* Feature Image */}
        <div className="w-full flex justify-center">
          <img
            src={about}
            className=""
            alt="Two people in a hosted, video-first conversation"
            loading="lazy"
          />
        </div>

        {/* Intro */}
        {/* <section className="pt-10 space-y-2 ">
          <h2 className="text-2xl md:text-4xl font-bold">
            Get to Know Us: Our <span className="text-[#E8936A]">Journey</span>
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold">
            And <span className="text-[#E8936A]">Vision</span>
          </h3>
        </section> */}

        {/* Section 1: Why Conversation Comes First */}
        <section className="px-4 md:px-0 py-6">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-3">
            Why Conversation Comes First
          </h2>
          <p className="font-poppins leading-relaxed">
            PodLove is for emotionally mature adults who value real connection over
            endless swiping. We match you first, then you meet on video. When two
            people talk without the pressure of public photos or crafted profiles,
            real compatibility can show up.
          </p>
        </section>

        {/* Section 2: The Problem + Our Approach */}
        <section className="px-4 md:px-0 py-6">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-3">
            The Problem We’re Solving
          </h2>
          <p className="font-poppins leading-relaxed mb-4">
            Endless swiping trains people to judge quickly and connect slowly. It
            leads to ghosting, mismatches, and performative profiles. People who
            want meaningful relationships deserve better.
          </p>

          <h3 className="font-poppins text-xl md:text-2xl font-semibold mb-2">
            Our approach
          </h3>
          <ul className="list-disc pl-6 space-y-2 font-poppins">
            <li>
              <strong>No public profile photos.</strong> You are blindly matched
              based on shared values, goals, and lifestyle. You meet on live video.
            </li>
            <li>
              <strong>Hosted, video-first conversations</strong> with a clear flow
              that replaces awkward texting.
            </li>
            <li>
              <strong>Designed for adults 35–55</strong> with emotionally
              intelligent norms and respectful pacing.
            </li>
          </ul>
        </section>

        {/* Section 3: What makes PodLove different */}
        <section className="px-4 md:px-0 py-6">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-4">
            What makes PodLove different
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-5 bg-white/80 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Two-Episode Journey</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Episode 1:</strong> Initial conversation and mutual
                  interest check
                </li>
                <li>
                  <strong>Episode 2:</strong> Identity reveal and deeper reflection
                  on compatibility
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 bg-white/80 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Safety &amp; Respect Built In</h3>
              <p className="leading-relaxed">
                Professional hosting creates a comfortable environment. Clear
                consent processes protect everyone involved.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 bg-white/80 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Relationship Readiness</h3>
              <p className="leading-relaxed">
                We serve people who want long-term relationships and are ready to
                show up as healthy partners. Designed for adults 35 to 55 who have
                done the work to be in a healthy relationship.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 bg-white/80 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Boutique by Design</h3>
              <p className="leading-relaxed">
                Limited spots per city support personal attention and white-glove
                coordination.
              </p>
              <p className="leading-relaxed mt-2">
                <strong>Personalized and more accurate matching.</strong> AI narrows
                options. A human host reviews and finalizes matches for fit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Our values */}
        <section className="px-4 md:px-0 py-6">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-3">
            Our values
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
              <h3 className="font-semibold">Intentional Connection</h3>
              <p className="text-sm mt-1">
                We create space for slow, meaningful beginnings.
              </p>
            </li>
            <li className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
              <h3 className="font-semibold">Respect for Individual Journey</h3>
              <p className="text-sm mt-1">
                Everyone&apos;s path to love is personal and sacred.
              </p>
            </li>
            <li className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
              <h3 className="font-semibold">Authenticity</h3>
              <p className="text-sm mt-1">
                Real connection starts with real presence.
              </p>
            </li>
            <li className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm">
              <h3 className="font-semibold">Emotional Intelligence</h3>
              <p className="text-sm mt-1">
                Empathy and curiosity guide everything we do.
              </p>
            </li>
            <li className="rounded-xl bg-white/80 border border-slate-200 p-4 shadow-sm md:col-span-2">
              <h3 className="font-semibold">Privacy and Dignity</h3>
              <p className="text-sm mt-1">
                Vulnerability is sacred, we protect it fiercely.
              </p>
            </li>
          </ul>
        </section>

        {/* Section 5: Privacy and safety */}
        <section className="px-4 md:px-0 py-6">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-3">
            Privacy and safety
          </h2>
          <p className="font-poppins leading-relaxed">
            We do not sell your data. We use safeguards to protect information. Read our{" "}
            <Link
              to="/privacy-policy"
              className="text-[#DC4600] underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DC4600]"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/opt-in-policy"
              className="text-[#DC4600] underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DC4600]"
            >
              SMS Consent and Opt-In Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;

