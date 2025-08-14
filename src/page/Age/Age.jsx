import { useState } from "react";
import bg from "../../assets/age-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useNavigate } from "react-router";
import { DatePicker, Form, Select } from "antd";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import dayjs from "dayjs";

const { Option } = Select;

const ageOptions = Array.from({ length: 21 }, (_, i) => i + 35);

const Age = () => {
  const navigate = useNavigate();
  const [updateAge, { isLoading }] = useUpdateUserInfoMutation();
  const [date, setDate] = useState(null);

  const onChange = (date) => {
    if (date) {
      setDate(date);
    }
  };

  const handleAge = (values) => {
    localStorage.setItem('age', JSON.stringify({
      min: values?.min,
      max: values?.max,
    }))

    const data = {
      preferences: {
        age: {
          min: values?.min,
          max: values?.max,
        },
      },
      dateOfBirth: dayjs(date).format("DD/MM/YYYY"),
    };


    // console.log(data);

    const birthDate = date;
    const today = dayjs();
    const age = today.diff(birthDate, "year");


    if (age < 35) {
      return toast.error("You must be 35 years or older to continue")
    }
    console.log("Calculated Age:", age);

    // update
    updateAge(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/gender");
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

        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <p className="text-xl md:text-4xl font-bold text-[#333333] text-center">
            Age
          </p>
          <p className="mt-2 font-medium text-center">
            Select your age for better matches.
          </p>
          <p className="mt-4 font-thin text-center mb-5">
            Those who love deeply never grow old; they may die of old age, but
            they die young.
          </p>

          <Form onFinish={handleAge} layout="vertical">
            <Form.Item
              name={"age"}
              label={<p className="font-medium">Your Birthday</p>}
            >
              <DatePicker
                className="w-full border-red-300"
                format="MM/DD/YYYY"
                onChange={onChange}
                defaultPickerValue={dayjs('1991-01-01', 'YYYY-MM-DD')}
              />
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

            <AuthButton disabled={isLoading} className={"py-2"}>{isLoading ? "Loading..." : "Next"}</AuthButton>
          </Form>
        </div>

        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Age;
