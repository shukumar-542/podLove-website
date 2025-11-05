/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
const { Option } = Select;
// const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dvjbfwhxe/image/upload";
// const UPLOAD_PRESET = "podlove_upload";

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [editProfile, { isLoading }] = useUpdateUserInfoMutation();
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const { data: getUser } = useGetUserQuery();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

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

  // ======= handle update profile information ===========//
  const handleUpdateProfile = async (values) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("phoneNumber", values.contact);
      formData.append("gender", values.gender);
      formData.append("bio", values.bio);

      if (selectedLocation) {
        formData.append("place", selectedLocation.address);
        formData.append("longitude", selectedLocation.lng);
        formData.append("latitude", selectedLocation.lat);
      }

      if (file) {
        formData.append("avatar", file);
      }

      await editProfile(formData).unwrap();

      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (err) {
      message.error("Profile update failed");
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
            <LocationSearch
              onSelectLocation={setSelectedLocation}
              defaultAddress={getUser?.data?.location?.place || ""}
            />
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
