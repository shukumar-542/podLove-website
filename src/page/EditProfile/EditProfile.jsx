import React, { useEffect, useState } from "react";
import { Form, Input, Upload, Avatar, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import AuthButton from "../../component/AuthButton/AuthButton";
import { CameraOutlined } from "@ant-design/icons";
import {
  useGetUserQuery,
  useUpdateUserInfoMutation,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import LocationSearch from "../../component/LocationSearch/LocationSearch";
const { Option } = Select;
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dvjbfwhxe/image/upload";
const UPLOAD_PRESET = "podlove_upload";

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [editProfile] = useUpdateUserInfoMutation();
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const { data: getUser } = useGetUserQuery();
  const [selectedLocation, setSelectedLocation] = useState(null);


  console.log(selectedLocation);
  useEffect(() => {
    if (getUser) {
      form.setFieldsValue({
        name: getUser?.data?.name,
        contact: getUser?.data?.phoneNumber,
        address: getUser?.data?.location?.place || "",
        gender: getUser?.data?.gender || "",
        bio: getUser?.data?.bio || "",
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

  // ======= handle update profile information ===========//

  const handleUpdateProfile = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const uploadedImageUrl = data.secure_url;
      setImageUrl(uploadedImageUrl);
      toast.success("Profile Update successfully!");

      const updateData = {
        name: values?.name,
        phoneNumber: values?.contact,
        gender: values?.gender,
        location: {
          place: selectedLocation?.address,
          longitude: selectedLocation?.lng,
          latitude: selectedLocation?.lat,
        },
        bio: values?.bio,
        ...(uploadedImageUrl && { avatar: uploadedImageUrl }),
      };
      const result = await editProfile(updateData);
      console.log(result);
    } catch (error) {
      console.error("Upload failed:", error);
      message.error("Failed to upload image.");
    } finally {
      setLoading(false);
    }
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

        </div>
        <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
          <div className="md:flex  gap-5 w-full ">
            <Form.Item label={"First Name"} name={"name"} className="w-full">
              <Input
                className="border-[#eb8b73]"
                placeholder="Enter Your Name"
              />
            </Form.Item>
            <Form.Item
              name={"contact"}
              label={"Phone Number"}
              className="w-full"
            >
              <Input
                className="border-[#eb8b73]"
                placeholder="Enter Your Phone Number"
              />
            </Form.Item>
          </div>
          <div className="md:flex   gap-5">
           

            <Form.Item label={"Gender"} name={"gender"} className="w-full">
              <Select placeholder="Select your gender" allowClear>
                <Option value="female">Female</Option>
                <Option value="male">Male</Option>
                <Option value="non-binary">Non-binary</Option>
                <Option value="transgender">Transgender</Option>
                <Option value="gender-fluid">Gender Fluid</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item label="Address" name="address">
            <LocationSearch onSelectLocation={setSelectedLocation}  defaultAddress={getUser?.data?.location?.place || ""} />
          </Form.Item>
          <Form.Item label="Bio" name="bio">
            <TextArea
              className="border-[#eb8b73]"
              rows={7}
              placeholder="Type your bio"
            />
          </Form.Item>
          <AuthButton className={"py-2"}>
            {loading ? "Updating..." : "Update"}
          </AuthButton>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
