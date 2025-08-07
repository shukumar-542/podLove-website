import { useState } from "react";
import logo from "../../assets/podLogo.png";
import { Input, Radio, Space } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const DiscoverCompatibilitySecond = () => {
  const [kids, setKids] = useState("No");
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [updateCompatibility, { isLoading }] = useUpdateUserInfoMutation();
  const previousAnswers = JSON.parse(localStorage.getItem("compatibility")) || [];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleUpdateCompatibility = () => {
    const data = {
      compatibility: [...previousAnswers, ...answers],
    };

    updateCompatibility(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/rating-yourself");
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

  return (
    <div className="bg-[#FBECE5] min-h-screen">
      <div className="container max-w-5xl mx-auto py-10">
        <div className="flex justify-center items-center flex-col mb-10">
          <img className="w-[267px] " src={logo} alt="" />
          <p className="text-[36px] font-medium font-poppins mt-5 text-[#242424]">
            Discover Compatibility
          </p>
        </div>

        <div className="mb-6">
          <p className="font-semibold">Do you have kids?*</p>
          <Radio.Group
            onChange={(e) => {
              setKids(e.target.value);
              handleChange(0, e.target.value);
            }}
            className="flex flex-col mt-2 custom-radio"
          >
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </div>

        {kids == "Yes" && (
          <div className="mb-6">
            <p className="font-medium font-poppins text-xl">
              If yes, how many kids do you have?
            </p>
            <Input
              onChange={(e) => handleChange(1, e.target.value)}
              placeholder="Enter number of kids"
              className="max-w-52 bg-[#FBECE5] mt-3 hover:bg-[#FBECE5]"
            />
          </div>
        )}

        {/* Do you want kids in the future? */}
        <div className="mb-6">
          <p className="font-semibold">Do you want kids in the future?</p>
          <Radio.Group
            onChange={(e) => handleChange(2, e.target.value)}
            className="flex flex-col gap-3 custom-radio"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="maybe">Maybe</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </div>
        {/* Date on kids person? */}
        <div className="mb-6">
          <p className="font-semibold">
            Will you date a person who has kids? *
          </p>
          <Radio.Group
            onChange={(e) => handleChange(3, e.target.value)}
            className="flex flex-col gap-3 custom-radio"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="maybe">Maybe</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </div>

        {/* Do you smoke? */}
        <div className="mb-6">
          <p className="font-semibold">Do you smoke?</p>
          <Radio.Group
            onChange={(e) => handleChange(4, e.target.value)}
            className="flex flex-col gap-3 custom-radio"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </div>

        {/* How would you describe your drinking habits? */}
        <div className="mb-6">
          <p className="font-semibold">
            How would you describe your drinking habits?
          </p>
          <Radio.Group
            onChange={(e) => handleChange(5, e.target.value)}
            className="flex flex-col gap-3 custom-radio mt-2"
          >
            <Radio value="Never">Never- don&apos;t drink alcohol at all</Radio>
            <Radio value="Rarely – I drink only on special occasions (e.g., holidays, celebrations)">
              Rarely – I drink only on special occasions (e.g., holidays,
              celebrations)
            </Radio>
            <Radio value="Socially – I drink occasionally in social settings">
              Socially – I drink occasionally in social settings
            </Radio>
            <Radio value="Occasionally – I drink a few times a month or less">
              Occasionally – I drink a few times a month or less
            </Radio>
            <Radio value="Regularly – I drink frequently, such as weekly or more">
              Regularly – I drink frequently, such as weekly or more
            </Radio>
            <Radio value="Prefer not to say – I’d rather not disclose this information">
              Prefer not to say – I’d rather not disclose this information
            </Radio>
          </Radio.Group>
        </div>
        {/* Never drinks date */}
        <div className="mb-6">
          <p className="font-semibold">
            If &quot;Never&quot;, Would you be comfortable dating someone who drinks?
          </p>
          <Radio.Group
            onChange={(e) => handleChange(6, e.target.value)}
            className="flex flex-col gap-3 custom-radio mt-2"
          >
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
            <Radio value="Depends">Depends</Radio>
          </Radio.Group>
        </div>

        {/* Do you consider yourself religious or spiritual? */}
        <p className="font-medium font-poppins text-xl">
          Do you consider yourself religious or spiritual?
        </p>
        <Radio.Group
          onChange={(e) => handleChange(7, e.target.value)}
          className="flex flex-col gap-3 custom-radio mt-2"
        >
          <Radio value="Yes, I’m religious">Yes, I’m religious</Radio>
          <Radio value="Yes, I’m spiritual but not religious">
            Yes, I’m spiritual but not religious
          </Radio>
          <Radio value="No, I’m not religious or spiritual">
            No, I’m not religious or spiritual
          </Radio>
          <Radio value="Prefer not to say">Prefer not to say</Radio>
        </Radio.Group>

        {/* If Religious, which religion? */}
        <p className="font-medium font-poppins text-xl mt-4">
          If religious, what is your religion?
        </p>
        <Radio.Group
          onChange={(e) => handleChange(8, e.target.value)}
          className="mt-4"
        >
          <Space direction="vertical">
            <Radio value="christian">Christian</Radio>
            <Radio value="muslim">Muslim</Radio>
            <Radio value="hindu">Hindu</Radio>
            <Radio value="buddhist">Buddhist</Radio>
            <Radio value="other">Other</Radio>
          </Space>
        </Radio.Group>

        {/* If Spiritual, describe beliefs */}

        <p className="font-medium font-poppins text-xl mt-5">
          If Spiritual, describe your spiritual beliefs
        </p>

        <Input.TextArea
          onChange={(e) => handleChange(9, e.target.value)}
          className="w-96 bg-[#FBECE5] hover:bg-[#FBECE5]"
          placeholder="Write here..."
        />

        {/* How important is religion/spirituality in your life? */}

        <p className="font-medium font-poppins text-xl mt-5">
          How important is religion/spirituality in your life?
        </p>
        <Radio.Group
          onChange={(e) => handleChange(10, e.target.value)}
          className="flex flex-col gap-3 custom-radio mt-5"
        >
          <Radio value="Not important at all.">Not important at all.</Radio>
          <Radio value="Somewhat important">Somewhat important</Radio>
          <Radio value="Not very important">Moderately important.</Radio>
          <Radio value="Very important">Very important.</Radio>
          <Radio value="Extremely important">Extremely important</Radio>
        </Radio.Group>

        {/* Would you date someone with different beliefs? */}

        <p className="font-medium font-poppins text-xl mt-5">
          Would you date someone with different religious or spiritual beliefs?
        </p>

        <Radio.Group
          onChange={(e) => handleChange(11, e.target.value)}
          className="flex flex-col gap-3 custom-radio mt-5"
        >
          <Radio value="Yes, I’m open to dating someone with different beliefs">
            Yes, I’m open to dating someone with different beliefs
          </Radio>
          <Radio value="No, I prefer someone who shares my beliefs">
            No, I prefer someone who shares my beliefs
          </Radio>
          <Radio value="Maybe, it depends on their level of practice or respect for my beliefs">
            Maybe, it depends on their level of practice or respect for my
            beliefs.
          </Radio>
        </Radio.Group>

        {/* Political  engagement  */}

        <p className="font-medium font-poppins text-xl mt-5">
          How would you describe your level of political engagement? (Select the
          option that best describes you.)
        </p>

        <Radio.Group
          onChange={(e) => handleChange(12, e.target.value)}
          className="flex flex-col gap-3 custom-radio mt-5"
        >
          <Radio value="Not at all political – I don’t follow politics and prefer to avoid political discussions">
            Not at all political – I don’t follow politics and prefer to avoid
            political discussions
          </Radio>
          <Radio value="Slightly political – I’m minimally engaged, but I occasionally follow major events.">
            Slightly political – I’m minimally engaged, but I occasionally
            follow major events.
          </Radio>
          <Radio value="Somewhat political – I stay informed about politics and discuss it occasionally.">
            Somewhat political – I stay informed about politics and discuss it
            occasionally.
          </Radio>
          <Radio value="Very political – I’m actively engaged and enjoy discussing political topics.">
            Very political – I’m actively engaged and enjoy discussing political
            topics.
          </Radio>
          <Radio value="Significantly political – Politics is a significant part of my life, and I’m deeply involved">
            Significantly political – Politics is a significant part of my life,
            and I’m deeply involved
          </Radio>
        </Radio.Group>

        {/* Political  engagement  */}

        <p className="font-medium font-poppins text-xl mt-5">
          Would you date someone with different political beliefs? (Select one
          option.)
        </p>

        <Radio.Group
          onChange={(e) => handleChange(13, e.target.value)}
          className="flex flex-col gap-3 custom-radio mt-5"
        >
          <Radio value="Yes, I’m open to dating someone with different political views">
            Yes, I’m open to dating someone with different political views
          </Radio>
          <Radio value="No, I prefer someone who aligns with my political beliefs">
            No, I prefer someone who aligns with my political beliefs
          </Radio>
          <Radio value="Maybe, it depends on the specific issues or level of engagement">
            Maybe, it depends on the specific issues or level of engagement
          </Radio>
        </Radio.Group>

        {/* Do you have a pet? */}

        <p className="font-medium font-poppins text-xl my-5">
          Do you have a pet?
        </p>

        <Radio.Group
          onChange={(e) => handleChange(14, e.target.value)}
          className="flex flex-col gap-3 custom-radio"
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>

        {/* Do you have a pet? */}

        <p className="font-medium font-poppins text-xl my-5">
          If yes, which pet do you have? *
        </p>

        <Radio.Group
          onChange={(e) => handleChange(15, e.target.value)}
          className="flex flex-col gap-3 custom-radio"
        >
          <Radio value="Dog">Dog</Radio>
          <Radio value="Cat">Cat</Radio>
          <Radio value="Bird">Bird</Radio>
          <Radio value="Other">Other</Radio>
        </Radio.Group>
        <div className="text-center">
          {/* <Link to={"/rating-yourself"}> */}
          <AuthButton
            handleOnClick={() => handleUpdateCompatibility()}
            className={"max-w-80 py-2"}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </AuthButton>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DiscoverCompatibilitySecond;
