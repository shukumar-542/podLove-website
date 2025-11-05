import { Form, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import about from "../../assets/about.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useCreateContactUsMutation } from "../../redux/Api/SubscriptionPlan";
import { toast } from "sonner";

const ContactUs = () => {
  const [createContactUs, { isLoading }] = useCreateContactUsMutation();

  const handleContactUs = (values) => {
    const data = {
      ...values,
    };
    createContactUs(data)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div className="bg-[#FAF2EF]">
      {/* New Contact Information Section */}
      <div className=" pt-8">
        <p className="text-center text-2xl font-semibold text-[#1C1C1C]">
          Contact PodLove Support
        </p>
        <p className="text-center text-base text-[#1C1C1C] mt-2">
          Need help? Reach us at{" "}
          <a href="mailto:support@podlove.co" className="text-[#F68064]">
            support@podlove.co
          </a>
        </p>
        <p className="text-center text-sm text-[#1C1C1C] mt-1">
          We value your experience.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-5 md:py-10">
        <div>
          <p className="text-center text-2xl font-poppins text-[#1C1C1C] font-semibold mb-5">
            Contact Us
          </p>
          <Form layout="vertical" onFinish={handleContactUs} className="px-5">
            <Form.Item name={"category"} label="Category">
              <Select
                placeholder="Please a category"
                options={[
                  {
                    value: "Technical",
                    label: "Technical",
                  },
                  {
                    value: "Non-Technical",
                    label: "Non-Technical",
                  },
                ]}
              ></Select>
            </Form.Item>
            <Form.Item name={"description"}>
              <TextArea
                className="border border-[#F68064] bg-[#FAF2EF]"
                rows={4}
              />
            </Form.Item>

            <AuthButton
              disabled={isLoading}
              className={`py-2 ${isLoading && "bg-gray-300"}`}
            >
              Send
            </AuthButton>
          </Form>
        </div>
        <div className="px-5 md:px-0">
          <img src={about} className="rounded-md" alt="About PodLove" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
