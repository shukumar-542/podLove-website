/* eslint-disable no-unused-vars */
import { useState } from "react";
import bg from "../../assets/upload-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Upload, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const UploadPhoto = () => {
  const navigate = useNavigate()
  const [updatePhoto, { isLoading }] = useUpdateUserInfoMutation()
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // Store file locally
  const handleFileSelect = ({ file }) => {
    setFile(file);
    setImageUrl(URL.createObjectURL(file));
  };
  // Upload image on Next button click
  const handleNextClick = () => {
    if (!file) {
      message.error("Please select an image first.");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", file);
    updatePhoto(formData)
      .then(() => {
        toast.success("Image uploaded successfully!")
        navigate("/discover-compatibility");
      })
      .catch(() => {
        message.error("Failed to upload image.");
      })
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
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Upload Photo
          </h1>
          <p className="text-center font-poppins text-[#242424] my-5">
            We&apos;d love to see you. Upload a photo for your dating journey.
          </p>

          <div className="w-[100%] flex justify-center items-center ">
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                handleFileSelect({ file });
                return false;
              }}
              className="w-[100%] flex justify-center items-center "
            >
              <div className="border-2 border-dashed border-red-300 mb-10 rounded-md p-6 flex justify-center items-center w-[300px] md:w-[250px] lg:w-[360px] xl:w-[460px] 2xl:w-[560px] h-56 cursor-pointer">
                {isLoading ? (
                  <p className="text-red-400">Uploading...</p>
                ) : imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-full h-full object-contain rounded-md"
                  />
                ) : (
                  <div className="text-red-400 flex items-center">
                    <CameraOutlined className="text-4xl" />
                  </div>
                )}
              </div>
            </Upload>
          </div>

          <AuthButton disabled={isLoading} handleOnClick={handleNextClick} className="py-2">
            {isLoading ? "Image Uploading..." : "Next"}
          </AuthButton>
        </div>

        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default UploadPhoto;
