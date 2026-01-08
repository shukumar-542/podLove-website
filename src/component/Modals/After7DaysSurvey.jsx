import { Form, Input, Modal, Radio } from "antd";
import AuthButton from "../AuthButton/AuthButton";
import { usePost7DaysSurveyMutation } from "../../redux/Api/PodcastApi";

const After7DaysSurveyModal = ({ is7DaysModalOpen, handle7DaysOk }) => {
  const [form] = Form.useForm();
  const [post7DaysSurvey, { isLoading }] = usePost7DaysSurveyMutation();

  const onFinish = (values) => {
    const dataToSend = {
      responses: [
        {
          question: "How easy was it to navigate the PodLove app?",
          answer: values.first,
        },
        {
          question:
            "Did you experience any technical issues (scheduling, chat, notifications)?",
          answer: values.second,
        },
        {
          question:
            "How satisfied are you with your overall experience so far?",
          answer: values.third,
        },
        {
          question:
            "Do you have any suggestions to improve matching or the app experience?",
          answer: values.fourth,
        },
      ],
    };

    post7DaysSurvey(dataToSend)
      .unwrap()
      .then(() => {
        window.location.reload();
        handle7DaysOk();
      })
      .catch();
  };

  return (
    <Modal
      title={null}
      footer={false}
      centered
      width={900}
      open={is7DaysModalOpen}
      onCancel={handle7DaysOk}
    >
      <div className="md:p-6 flex justify-center">
        <div className="md:max-w-3xl md:p-8 font-poppins">
          <h2 className="md:text-xl font-semibold text-center mb-4 leading-9">
            Thank you for joining our Pod Love! Your feedback is crucial in
            helping us improve the PodLove experience for you and others. Please
            take a few moments to share your thoughts.
          </h2>

          <Form form={form} onFinish={onFinish} layout="vertical">
            {/* Navigation Experience */}

            <Form.Item
              label="1. How easy was it to navigate the PodLove app?"
              name="first"
              rules={[{ required: true, message: "Please select a rating!" }]}
            >
              <Radio.Group className="flex flex-col space-y-2 custom-radio">
                <Radio value={1}>1 (Very difficult)</Radio>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
                <Radio value={4}>4</Radio>
                <Radio value={5}>5 (Very easy)</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Technical Issues */}
            <Form.Item
              label="2. Did you experience any technical issues (scheduling, chat, notifications)?"
              name="second"
              rules={[{ required: true, message: "Please select an option!" }]}
            >
              <Radio.Group className="flex flex-col space-y-2 custom-radio">
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Overall Satisfaction */}
            <Form.Item
              label="3. How satisfied are you with your overall experience so far?"
              name="third"
              rules={[{ required: true, message: "Please select a rating!" }]}
            >
              <Radio.Group className="flex flex-col space-y-2 custom-radio">
                <Radio value={1}>1 (Not satisfied)</Radio>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
                <Radio value={4}>4</Radio>
                <Radio value={5}>5 (Very satisfied)</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Suggestions */}
            <Form.Item
              name="fourth"
              label="4. Do you have any suggestions to improve matching or the app experience?"
              rules={[
                {
                  required: true,
                  message:
                    "Please write how to improve matching or the app experience!",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Write here"
                className="border-[#FFA175]"
              />
            </Form.Item>

            <Form.Item>
              <AuthButton
                disabled={isLoading}
                type="primary"
                htmlType="submit"
                className="w-full py-1 md:py-2"
              >
                {isLoading ? "Loading..." : "Submit"}
              </AuthButton>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default After7DaysSurveyModal;
