import { Form, Radio, Input, Button, ConfigProvider, Card } from "antd";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSubmitConnectionPathwayMutation } from "../../redux/Api/PodcastApi";
import { useEffect, useState } from "react";
import AttentionModal from "../../component/Modals/AttentionModal";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const RESPONSEOPTIONS = [
  "Strongly Agree",
  "Agree",
  "Neutral",
  "Disagree",
  "Strongly Disagree",
];
const YES_NO = ["Yes", "No"];
const YES_NO_NOT_SURE = ["Yes", "No", "Not sure yet"];

export default function ConnectionPathway() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const [submitConnectionPathway, { isLoading }] =
    useSubmitConnectionPathwayMutation();

  const onFinish = (values) => {
    const answers = {
      userResponses: [
        values.boundaries,
        values.consent,
        values.monogamous,
        values.exclusivityReason.trim(),
        values.emotionalAvailability,
        values.resolvedBaggage,
        values.committed,
        values.selfWork,
        values.deepConversation,
        values.strongRelationship,
      ],
    };

    submitConnectionPathway(answers)
      .unwrap()
      .then((data) => {
        if (!data?.data?.isSuitable) {
          setIsModalOpen(true);
        }
        if (data?.data?.isSuitable) {
          navigate(`/sign-up`);
        }
      })
      .catch(() => {});
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: { colorPrimary: "rgb(255,161,117)" },
          Button: { colorPrimary: "rgb(255,161,117)" },
        },
      }}
    >
      <div className="min-h-screen bg-[#ffa175] flex items-start justify-center py-12 px-4 relative">
        {/* BACK ARROW FIXED */}
        <Link to="/" className="absolute top-10 my-5 left-10 z-[9999]">
          <IoArrowBack size={30} className="text-[#F26828] cursor-pointer" />
        </Link>

        <AttentionModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />

        <Card className="w-full max-w-3xl shadow-lg rounded-2xl">
          <div className="px-0 py-6 md:px-10">
            <header className="flex items-center gap-3 mb-4">
              <div className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
                <span>Connection Pathway</span>
              </div>
            </header>

            <p className="text-gray-600 mb-6">Please fill out this form</p>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                boundaries: undefined,
                consent: undefined,
                monogamous: undefined,
                exclusivityReason: "",
                emotionalAvailability: undefined,
                resolvedBaggage: undefined,
                committed: undefined,
                selfWork: undefined,
                deepConversation: undefined,
                strongRelationship: undefined,
              }}
            >
              {/* Question 1 */}
              <Form.Item
                name="boundaries"
                label="I believe in communicating openly about boundaries with my partner."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    {RESPONSEOPTIONS.map((label) => (
                      <Radio key={label} value={label} className="py-2">
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 2 */}
              <Form.Item
                name="consent"
                label="It’s important to me that both partners give enthusiastic consent before progressing to physical intimacy."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="flex gap-6">
                    {YES_NO.map((label) => (
                      <Radio key={label} value={label}>
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 3 */}
              <Form.Item
                name="monogamous"
                label="I am interested in a monogamous, exclusive relationship."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="flex gap-4 flex-wrap">
                    {YES_NO_NOT_SURE.map((label) => (
                      <Radio key={label} value={label}>
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Exclusivity reason */}
              <Form.Item
                name="exclusivityReason"
                label="Why is exclusivity important to you in a relationship?"
                rules={[{ required: true, message: "Please provide details." }]}
              >
                <Input.TextArea
                  rows={2}
                  placeholder="Details"
                  maxLength={600}
                />
              </Form.Item>

              {/* Question 4 */}
              <Form.Item
                name="emotionalAvailability"
                label="I am emotionally available and ready to invest in a serious relationship."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    {RESPONSEOPTIONS.map((label) => (
                      <Radio key={label} value={label} className="py-2">
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 5 */}
              <Form.Item
                name="resolvedBaggage"
                label="I have resolved most of my past relationship baggage and am ready to move forward."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="flex gap-6">
                    {YES_NO.map((label) => (
                      <Radio key={label} value={label}>
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 6 */}
              <Form.Item
                name="committed"
                label="I prioritize being in a committed relationship."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    {RESPONSEOPTIONS.map((label) => (
                      <Radio key={label} value={label} className="py-2">
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 7 */}
              <Form.Item
                name="selfWork"
                label="Have you worked on yourself to become a better partner?"
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="flex gap-4 flex-wrap">
                    {YES_NO_NOT_SURE.map((label) => (
                      <Radio key={label} value={label}>
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 8 */}
              <Form.Item
                name="deepConversation"
                label="I am willing to invest time in deep conversations to truly understand my partner."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="flex gap-6">
                    {YES_NO.map((label) => (
                      <Radio key={label} value={label}>
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Question 9 */}
              <Form.Item
                name="strongRelationship"
                label="I believe that building a strong relationship takes time and intentional effort."
                rules={[{ required: true, message: "Please choose one." }]}
              >
                <Radio.Group>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    {RESPONSEOPTIONS.map((label) => (
                      <Radio key={label} value={label} className="py-2">
                        {label}
                      </Radio>
                    ))}
                  </div>
                </Radio.Group>
              </Form.Item>

              <div className="mt-6">
                <Form.Item shouldUpdate>
                  {() => {
                    const vals = form.getFieldsValue(true);
                    const complete =
                      vals.boundaries &&
                      vals.consent &&
                      vals.monogamous &&
                      vals.exclusivityReason?.trim() &&
                      vals.emotionalAvailability &&
                      vals.resolvedBaggage &&
                      vals.committed &&
                      vals.selfWork &&
                      vals.deepConversation &&
                      vals.strongRelationship;

                    return (
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        loading={isLoading}
                        disabled={isLoading || !complete}
                        style={{
                          background: "#ffa175",
                          borderColor: "#ffa175",
                        }}
                        icon={<FiSend className="text-lg" aria-hidden />}
                      >
                        {isLoading ? "Submitting..." : "Submit"}
                      </Button>
                    );
                  }}
                </Form.Item>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </ConfigProvider>
  );
}
