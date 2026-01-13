import { Button, ConfigProvider, Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import img1 from "../../assets/podLogo.png";

export default function WhatToExpect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const steps = [
    {
      title: "Initial Onboarding",
      desc: "Values Discovery",
    },
    {
      title: "Matching Process",
      desc: "The Blind Connection",
    },
    {
      title: "Matching Based On:",
      points: [
        "Value alignment",
        "Compatibility scores",
        "Shared life stage experiences",
        "Communication style synergy",
      ],
    },
    {
      title: "Podcast Interaction",
      desc: "You meet your matches face to face during your podcast episode",
    },
    { title: "Make date selection during podcast", desc: "" },
    { title: "Return for post", desc: "Date podcast episode" },
  ];

  return (
    <ConfigProvider
      theme={{ components: { Button: { colorPrimary: "rgb(255,161,117)" } } }}
    >
      <div className="min-h-screen bg-[#ffa175] flex items-center justify-center py-12 px-3 relative font-sans">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 z-[9999]"
        >
          <IoArrowBack size={30} className="text-white cursor-pointer" />
        </button>

        <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-5">
          <div className="flex flex-col items-center mb-8 text-center">
            <NavLink to="/">
              <img className="h-8 md:h-10" src={img1} alt="Logo" />
            </NavLink>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6 px-4">
              We Don&apos;t Match Profiles; We Match Souls
            </h1>
            <p className="text-[#ffa175] text-2xl font-bold mt-2">
              What to expect
            </p>
          </div>

          <div className="space-y-3 mb-10 px-2 md:px-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#ffa175] text-xl mt-1 shrink-0" />
                <div className="text-gray-600 text-base">
                  <span className="font-bold">{step.title}</span>
                  {step.desc && <span>: {step.desc}</span>}

                  {step.points && (
                    <ul className="list-disc ml-8 mt-1 space-y-1">
                      {step.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            type="primary"
            size="large"
            block
            className="h-14 text-xl font-bold rounded-xl"
            style={{ background: "#ffa175", borderColor: "#ffa175" }}
            onClick={() => navigate("/terms-of-use")}
          >
            Next
          </Button>
        </Card>
      </div>
    </ConfigProvider>
  );
}
