import React, { useEffect, useState } from "react";
import { Form, Input, Upload, Avatar, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import AuthButton from "../../component/AuthButton/AuthButton";
import { CameraOutlined } from "@ant-design/icons";
import {
  useGetUserQuery,
  useUpdateUserInfoMutation,
} from "../../redux/Api/AuthApi";


const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dvjbfwhxe/image/upload";
const UPLOAD_PRESET = "podlove_upload";


const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [editProfile] = useUpdateUserInfoMutation();
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const { data: getUser } = useGetUserQuery();

  console.log(getUser?.data);

  useEffect(() => {
    if (getUser) {
      form.setFieldsValue({
        name: getUser?.data?.name,
        contact: getUser?.data?.contact,
        address: getUser?.data?.address || "",
      });
    }
  }, [form, getUser]);

   // Store file locally
   const handleFileSelect = ({ file }) => {
    setFile(file);
    setImageUrl(URL.createObjectURL(file)); 
  };


  const handleImageChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  const handleUpdateProfile = (values) => {
    console.log(values);
  };

  return (
    <div className="px-2 md:px-0 bg-[#FAF2EF] flex items-center justify-center py-10">
      <div className="bg-white  shadow-md shadow-[#eb8b73] my-10 p-5 rounded-md w-full px-2 md:px-10 md:w-1/3 ">
        {/* <img src={profile} className="h-32 w-32 rounded-full relative -top-16 left-28 md:left-52" alt="" /> */}

        <div className="h-32 w-32 rounded-full relative -top-16 left-28 md:left-52">
          <Upload
            showUploadList={false}
            beforeUpload={(file) => {
              handleFileSelect({ file });
              return false; 
            }}
            onChange={handleImageChange}
          >
            <Avatar
              size={128}
              src={imageUrl ? imageUrl : getUser?.data?.avatar}
              className="cursor-pointer"
              icon={<CameraOutlined />}
            />
          </Upload>


          {/* <Upload
                        showUploadList={false}
                        beforeUpload={(file) => {
                          handleFileSelect({ file });
                          return false; 
                        }}
                        className="w-full"
                      >
                        <div className="border-2 border-dashed border-red-300 mb-10 rounded-md p-6 flex justify-center items-center md:w-[560px] h-56 cursor-pointer">
                          {loading ? (
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
                      </Upload> */}



        </div>
        <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
          <div className="md:flex  gap-5 w-full ">
            <Form.Item label={"First Name"} name={"name"} className="w-full">
              <Input placeholder="Enter Your Name" />
            </Form.Item>
            <Form.Item
              name={"contact"}
              label={"Phone Number"}
              className="w-full"
            >
              <Input placeholder="Enter Your Phone Number" />
            </Form.Item>
          </div>
          <div className="md:flex   gap-5">
            {/* <Form.Item name={'birth'} label={"Date of Birth(MM/DD/YYYY)"} className="w-full">
              <Input placeholder="02/24/2025" />
            </Form.Item> */}
            <Form.Item label={"Gender"} name={"gender"} className="w-full">
              <Input placeholder="Enter Your gender" />
            </Form.Item>
          </div>
          <Form.Item label="Location" name="address">
            <Input placeholder="Ontario, USA" />
          </Form.Item>
          <Form.Item label="Bio" name="bio">
            <TextArea placeholder="Type your bio" />
          </Form.Item>
          <AuthButton className={"py-2"}>Update</AuthButton>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
