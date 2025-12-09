import { useEffect, useState } from "react";
import bg from "../../assets/body-bg.png";
import { useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Checkbox } from "antd";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";

const options = [
  { label: "Athletic", value: "Athletic" },
  { label: "Curvy", value: "Curvy" },
  { label: "Slim", value: "Slim" },
  { label: "Average", value: "Average" },
  { label: "Plus-size", value: "Plus-size" },
  { label: "Muscular", value: "Muscular" },
];

const Body = () => {
  const navigate = useNavigate();
  const [updateBodyType, { isLoading }] = useUpdateUserInfoMutation();
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [preferredBodyType, setPreferredBodyType] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const handleUpdateBodyType = () => {
    if (!selectedBodyType || preferredBodyType.length === 0) {
      return toast.error(
        "Please select both your body type and preferred body type."
      );
    }

    const data = {
      bodyType: selectedBodyType,
      preferences: { bodyType: preferredBodyType },
    };

    localStorage.setItem(
      "bodyType",
      JSON.stringify({ bodyType: preferredBodyType })
    );

    updateBodyType(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/ethnicity");
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh] relative"
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0"></div>
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="md:col-span-1"></div>
        <div className="bg-white rounded-md p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Body Type
          </h1>
          <p className="text-center font-poppins font-medium my-2">
            How would you describe your body type?
          </p>
          <p className="text-center font-poppins mt-3 font-normal text-sm mb-10">
            Choose the option that best represents you
          </p>

          <div className="mb-4">
            <p className="font-semibold">What your body type?</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {options.map((opt) => (
                <Checkbox
                  key={opt.value}
                  checked={selectedBodyType === opt.value} // only this one is checked
                  onChange={() => setSelectedBodyType(opt.value)} // clicking updates state
                >
                  {opt.label}
                </Checkbox>
              ))}
            </div>

            <div className="my-10">
              <p className="font-semibold">Preferred Body Type</p>
              <Checkbox.Group
                options={options}
                value={preferredBodyType} // multi-select
                onChange={setPreferredBodyType}
                className="flex flex-wrap gap-3 mt-2"
              />
            </div>
          </div>

          <AuthButton
            handleOnClick={handleUpdateBodyType}
            className={"py-2"}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Next"}
          </AuthButton>
        </div>
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Body;
