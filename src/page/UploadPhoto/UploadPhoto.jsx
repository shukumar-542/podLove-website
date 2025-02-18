import React, { useState } from "react";
import bg from "../../assets/upload-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Link } from "react-router";
import { Upload } from "antd";
import { PlusOutlined, CameraOutlined } from "@ant-design/icons";
const UploadPhoto = () => {
    const [imageUrl, setImageUrl] = useState(null);

    const handleUpload = ({ file }) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
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
        <div className="bg-white  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Upload Photo
          </h1>
          <p className="text-center font-poppins text-[#242424]  my-5">
            We'd love to see you. Upload a photo for your dating journey.
          </p>

          <div className="flex justify-center items-center ">
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                handleUpload({ file });
                return false; 
              }}
              className="w-full  "
            >
              <div className="border-2 border-dashed border-red-300  mb-10 rounded-md p-6 flex justify-center items-center  md:w-[560px] h-56 cursor-pointer">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-full h-full object-contain rounded-md"
                  />
                ) : (
                  <div className="text-red-400 flex  items-center">
                    <CameraOutlined className="text-4xl" />
                  </div>
                )}
              </div>
            </Upload>
          </div>

          <Link to={"/discover-compatibility"}>
            <AuthButton className={"py-1"}>Next</AuthButton>
          </Link>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default UploadPhoto;
