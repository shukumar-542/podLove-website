import { useState } from "react";
import logo from "../../assets/podLogo.png";
import { Radio } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useNavigate } from "react-router";
import { toast } from "sonner";
// import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
// import { toast } from "sonner";
const DiscoverCompatibility = () => {
  const navigate = useNavigate();
  // const [updateCompatibility] = useUpdateUserInfoMutation();
  const [answers, setAnswers] = useState([]);
  const [errors, setErrors] = useState([]);


  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    const newErrors = [...errors];
    newErrors[index] = false; // Clear the error for this question
    setErrors(newErrors);
  };

  // const handleDiscoverCompatibility = () => {
  //   const data = {
  //     compatibility: answers,
  //   };
  //   console.log(data);
  //   localStorage.setItem("compatibility", JSON.stringify(data));
  //   navigate('/discover-compatibility-part')

  //   // updateCompatibility(data)
  //   //   .unwrap()
  //   //   .then((payload) => {
  //   //     toast.success(payload?.message)
  //   //     navigate('/discover-compatibility-part')
  //   //   })
  //   //   .catch((error) => toast.error(error?.data?.message));
  // };

  const handleDiscoverCompatibility = () => {
    const newErrors = answers.map((answer) => !answer);
    setErrors(newErrors);

    if (answers.length < 6) {
      toast.error("Please answer all the questions before proceeding!")
      return
    }

    localStorage.setItem("compatibility", JSON.stringify(answers));
    navigate("/discover-compatibility-part");
  };
  console.log(answers.length);

  return (
    <div className="bg-[#FBECE5] min-h-screen">
      <div className="container max-w-5xl mx-auto py-10">
        <div className="flex flex-col justify-center items-center ">
          <img className="w-[267px] " src={logo} alt="" />
          <p className=" text-xl md:text-[40px] font-medium font-poppins mt-5 text-[#242424] px-6">
            Discover Compatibility
          </p>
        </div>

        <div className=" p-6">
          <h2 className="text-lg font-bold mb-4">
            Let&apos;s Discover Your Compatibility!
          </h2>

          {/* Question 1 */}
          <div className="mb-6">
            <p className="font-semibold">
              Do you prefer spending your weekends socializing in larger
              gatherings or relaxing at home with a few close friends?
            </p>
            <Radio.Group
              onChange={(e) => handleChange(0, e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="Larger gatherings">Larger gatherings</Radio>
              <Radio value="Relaxing with close friends">
                Relaxing with close friends
              </Radio>
            </Radio.Group>
          </div>

          {/* Question 2 */}
          <div className="mb-6">
            <p className="font-semibold">
              When faced with a major life decision, do you usually follow your
              head (logic) or your heart (feelings)?
            </p>
            <Radio.Group
              onChange={(e) => handleChange(1, e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="Head (logic)">Head (logic)</Radio>
              <Radio value="Heart (feelings)">Heart (feelings)</Radio>
            </Radio.Group>
          </div>

          {/* Question 3 */}
          <div className="mb-6">
            <p className="font-semibold">
              Which of these activities sounds most appealing to you?
            </p>
            <Radio.Group
              onChange={(e) => handleChange(2, e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="A weekend hiking trip in nature">
                A weekend hiking trip in nature
              </Radio>
              <Radio value="A museum or art gallery visit">
                A museum or art gallery visit
              </Radio>
              <Radio value="A cozy movie night at home">
                A cozy movie night at home
              </Radio>
              <Radio value="A concert or live music event">
                A concert or live music event
              </Radio>
            </Radio.Group>
          </div>

          {/* Question 4 */}
          <div className="mb-6">
            <p className="font-semibold">
              How important is personal growth in your life?
            </p>
            <Radio.Group
              onChange={(e) => handleChange(3, e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="Extremely important – I am always working on bettering myself">
                Extremely important – I am always working on bettering myself
              </Radio>
              <Radio value="Moderately important – I like to grow but not obsessively">
                Moderately important – I like to grow but not obsessively
              </Radio>
              <Radio value="Not very important – I prefer stability and consistency">
                Not very important – I prefer stability and consistency
              </Radio>
            </Radio.Group>
          </div>

          {/* Question 5 */}
          <div className="mb-6">
            <p className="font-semibold">How do you like to show affection?</p>
            <Radio.Group
              onChange={(e) => handleChange(4, e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="Physical touch (hugs, kisses, etc.)">
                Physical touch (hugs, kisses, etc.)
              </Radio>
              <Radio value="words">
                Words of affirmation (compliments, verbal expressions of love)
              </Radio>
              <Radio value="Acts of service (doing things to help my partner)">
                Acts of service (doing things to help my partner)
              </Radio>
              <Radio value="Quality time (spending focused time together)">
                Quality time (spending focused time together)
              </Radio>
            </Radio.Group>
          </div>

          {/* Question 6 */}
          <div className="mb-6">
            <p className="font-semibold">
              How do you envision your ideal future?
            </p>
            <Radio.Group
              onChange={(e) => handleChange(5, e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="Building a family with a partner<">
                Building a family with a partner
              </Radio>
              <Radio value="Traveling the world and having enriching experiences">
                Traveling the world and having enriching experiences
              </Radio>
              <Radio value="Focusing on my career and personal goals">
                Focusing on my career and personal goals
              </Radio>
              <Radio value="Living a simple, peaceful life surrounded by loved ones">
                Living a simple, peaceful life surrounded by loved ones
              </Radio>
            </Radio.Group>
          </div>
          <div className="text-center">
            {/* <Link to={"/discover-compatibility-part"}> */}
            <AuthButton
              handleOnClick={() => handleDiscoverCompatibility()}
              className={"max-w-80  py-2"}
            >
              Next
            </AuthButton>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCompatibility;
