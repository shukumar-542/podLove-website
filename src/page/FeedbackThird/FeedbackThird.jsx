import { Form, Input, Radio, } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useCreateSurveyMutation } from "../../redux/Api/SubscriptionPlan";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const FeedbackThird = () => {
  const [createSurvey] = useCreateSurveyMutation();
  const navigate = useNavigate();

  const handleFeedback = (values) => {
    const formattedData = JSON.parse(localStorage.getItem("Feedback"));

    const data = {
      ...formattedData,
      ...values,
    };
    createSurvey(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        navigate('/home')
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div className="flex justify-center bg-[#FFECE2] p-8 min-h-screen">
      <div className="w-full max-w-3xl bg-[#FFECE2] p-6 rounded-md">
        <h2 className="text-center font-semibold leading-9 text-lg">
          Thank you for joining our Pod Love! Your feedback is crucial in
          helping us improve the PodLove experience for you and others. Please
          take a few moments to share your thoughts.
        </h2>

        <Form layout="vertical" onFinish={handleFeedback}>
          {/* Overall Connection */}
          <h3 className="mt-6  text-xl font-semibold">4. Date Satisfaction</h3>
          <Form.Item
            label="How satisfied were you with the overall experience?*"
            name="eleven"
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              {["01 (Not Satisfied)", "2", "3", "4", "5 (Very satisfied)"].map(
                (option, index) => (
                  <Radio key={index} value={index}>
                    {option}
                  </Radio>
                )
              )}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Would you be interested in seeing your match again? *"
            name="twelve"
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              {["Yes", "Somewhat", "No"].map((option, index) => (
                <Radio key={index} value={index}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"thirteen"}
            label="If not, can you share what led to this decision?"
          >
            <Input.TextArea
              placeholder="Write here"
              className="bg-[#FFECE2] border-orange-400"
            />
          </Form.Item>

          {/* Chemistry and Compatibility */}
          <h3 className="mt-6 font-semibold">5. App Experience</h3>
          <Form.Item
            label="How would you rate the ease of use of the PodLove app in coordinating this date? *"
            name="fourteen"
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              {["01 (Very difficult)", "2", "3", "4", "5 (Very easy)"].map(
                (option, index) => (
                  <Radio key={index} value={index}>
                    {option}
                  </Radio>
                )
              )}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Did you encounter any issues with scheduling or communicating through the app?*"
            name="fifteen"
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              {["Yes", "No"].map((option, index) => (
                <Radio key={index} value={index}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name={"sixteen"}
            label="If yes, please describe the issue you experienced.*"
          >
            <Input.TextArea
              placeholder="Write here"
              className="bg-[#FFECE2] border-orange-400"
            />
          </Form.Item>

          <h1 className="text-xl mb-2">6. Future Improvements</h1>

          <Form.Item
            name={"seventeen"}
            label="Do you have any suggestions for improving the matching process or date experience? *"
          >
            <Input.TextArea
              placeholder="Write here"
              className="bg-[#FFECE2] border-orange-400"
            />
          </Form.Item>
          <Form.Item
            name={"eighteen"}
            label="How can we make future dates more comfortable and enjoyable for you?"
          >
            <Input.TextArea
              placeholder="Write here"
              className="bg-[#FFECE2] border-orange-400"
            />
          </Form.Item>
          <h1 className="text-xl mb-2">7. Optional Additional Feedback</h1>
          <Form.Item
            name={"nineteen"}
            label="How can we make future dates more comfortable and enjoyable for you?"
          >
            <Input.TextArea
              placeholder="Write here"
              className="bg-[#FFECE2] border-orange-400"
            />
          </Form.Item>

          {/* Next Button */}
          <Form.Item>
            <AuthButton
              type="primary"
              htmlType="submit"
              className="w-full py-2 bg-[#F48C72]"
            >
              Submit
            </AuthButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FeedbackThird;
