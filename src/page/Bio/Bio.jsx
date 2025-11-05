// import React from "react";
import bg from "../../assets/bio-bg.png";
import { useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useBioValidationMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
// import { UserOutlined } from '@ant-design/icons';
const Bio = () => {
  const navigate = useNavigate();
  const [bioValidation, { isLoading }] = useBioValidationMutation();
  // const [updateUserBio] = useUpdateUserBioMutation()
  // const [UpdateUserBioNew] = useUpdateUserBioNewMutation();

  const handleAddBio = (value) => {
    if (!value.bio) {
      return toast.error("Please add your bio");
    }
    const data = {
      text: value?.bio,
    };
    // UpdateUserBioNew(data).unwrap()
    //   .then((data) => {
    //   })
    //   .catch((error) => {
    //   });

    bioValidation(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/upload-photo");
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
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
      className="h-[100vh]  relative "
    >
      {/* Opacity section */}
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      {/* Grid divide by 12 column */}
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Add Your Bio
          </h1>
          <p className="text-center">Please do not add your name</p>
          <p className="text-center font-poppins  my-5">
            Here are a few prompts to get you started:
          </p>
          <div className="space-y-4 my-10">
            <p>1.What inspires you the most in life? </p>
            <p>2.What are your passions or hobbies?</p>
            <p>3.What values matter most to you in relationships?</p>
            <p>4.How do you describe your personality in three words?</p>
          </div>
          <Form onFinish={handleAddBio} layout="vertical">
            <Form.Item
              name={"bio"}
              label={
                <p className="font-medium">Write your bio(max 200 word) </p>
              }
            >
              <TextArea rows={10} />
            </Form.Item>
            <AuthButton disabled={isLoading} className={"py-2"}>
              {isLoading ? "Loading..." : "Next"}
            </AuthButton>
          </Form>
          {/* <Link to={"/upload-photo"}> */}
          {/* </Link> */}
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Bio;
