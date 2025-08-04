import { Form, Input, Radio } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import {  useNavigate } from "react-router";
const FeedbackSecond = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Form Values:", values);
    const data =  JSON.parse(localStorage.getItem("Feedback"))
    if(values){
      const addData = {
        ...data, ...values

      }
      localStorage.setItem("Feedback", JSON.stringify(addData));
      navigate('/feedback-third-step')

    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FDEEE8] p-4">
      <div className="w-full max-w-3xl  p-6">
        <h2 className="text-lg font-bold text-center mb-6">
          Thank you for joining our Pod Love! Your feedback is crucial in
          helping us improve the PodLove experience for you and others. Please
          take a few moments to share your thoughts.
        </h2>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Did you and your match share similar values, interests, or relationship goals? *"
            name="six"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              <Radio value={0}>Yes</Radio>
              <Radio value={1}>Somewhat</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>


          <Form.Item
            label="In your opinion, what factors influenced the level of chemistry you experienced?"
            name="seven"
          >
            <Input.TextArea placeholder="Write here" rows={3} />
          </Form.Item>




          <h3 className="font-semibold">3. Communication and Comfort</h3>
          <Form.Item
            label="How would you rate the quality of communication during the date?"
            name="eight"
            rules={[{ required: true, message: "Please select a rating!" }]}
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              <Radio value={0}>01 (Poor communication)</Radio>
              <Radio value={1}>2</Radio>
              <Radio value={2}>3</Radio>
              <Radio value={3}>4</Radio>
              <Radio value={4}>5 (Excellent communication)</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Did you feel comfortable being yourself during the date?"
            name="nine"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Radio.Group className="flex flex-col space-y-2 custom-radio">
              <Radio value={0}>Yes</Radio>
              <Radio value={1}>Somewhat</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Were there any awkward or uncomfortable moments? If so, please describe."
            name="ten"
          >
            <Input.TextArea
              placeholder="Write here"
              className="border-orange-400"
              rows={3}
            />
          </Form.Item>

          <Form.Item className="flex justify-center">
            {/* <Link to={'/feedback-third-step'}> */}
              <AuthButton
                type="primary"
                htmlType="submit"
                className="bg-orange-400 px-6 py-2 rounded-md"
              >
                Next
              </AuthButton>
            {/* </Link> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FeedbackSecond;
