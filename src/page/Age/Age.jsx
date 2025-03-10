import React from "react";
import bg from "../../assets/age-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Link, useNavigate } from "react-router";
import { Form, Select } from "antd";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";

const ageOptions = Array.from({ length: 21 }, (_, i) => i + 35);
const Age = () => {
  const navigate = useNavigate();
  const [updateAge] = useUpdateUserInfoMutation();

  // handle update age function
  const handleAge = (values) => {
    const data = {
      preferences: {
        age: {
          min: values?.min,
          max: values?.max,
        },
      },
      age: values?.age,
    };
    updateAge(data)
      .unwrap()
      .then((payload) =>{
        toast.success(payload?.message)
        navigate('/gender')
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
      className="h-[100vh]  relative"
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white  shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <p className=" text-xl md:text-4xl font-bold text-[#333333] text-center">
            Age
          </p>
          <p className=" mt-2 font-medium text-center">
            Select your age for better matches.
          </p>
          <p className="mt-4 font-thin text-center mb-5">
            Those who love deeply never grow old; they may die of old age, but
            they die young.
          </p>

          <Form onFinish={handleAge} layout="vertical">
            <Form.Item
              name={"age"}
              label={<p className="font-medium">Your Age</p>}
            >
              <Select placeholder="Select your age">
                {ageOptions.map((age) => (
                  <Option key={age} value={age}>
                    {age}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <p className="font-medium">Preferred Age</p>
            <div className="flex justify-between items-center gap-5 mt-2">
              <Form.Item name={"min"} className="w-full" label="Minimum Age">
                <Select placeholder="35">
                  {ageOptions.map((age) => (
                    <Option key={age} value={age}>
                      {age}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name={"max"} className="w-full" label="Maximum Age">
                <Select placeholder="55">
                  {ageOptions.map((age) => (
                    <Option key={age} value={age}>
                      {age}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <AuthButton className={"py-2"}>Next</AuthButton>
          </Form>
          {/* <Link to={"/gender"}> */}
          {/* </Link> */}
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Age;
