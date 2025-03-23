import React from 'react'
import { Form, Radio, Input, Button } from "antd";
import AuthButton from '../../component/AuthButton/AuthButton';
import { Link, useNavigate } from 'react-router';
const FeedbackOne = () => {
  const navigate = useNavigate()
    const [form] = Form.useForm();

    const onFinish = (values) => {
      if(values){
        localStorage.setItem("Feedback", JSON.stringify(values));
        navigate("/feedback-second-step")

      }
    };
  
  return (
    <div className="p-6 bg-[#FCE7D3] min-h-screen flex justify-center">
      <div className="max-w-2xl w-full  p-8  font-poppins">
        <h2 className="text-xl font-semibold text-center mb-4 leading-9">
          Thank you for joining our Pod Love! Your feedback is crucial in helping
          us improve the PodLove experience for you and others. Please take a
          few moments to share your thoughts.
        </h2>

        <Form form={form} onFinish={onFinish} layout="vertical" >
          {/* Overall Connection */}
          <h1 className='text-xl'>1. Overall Connection</h1>
          <Form.Item
            label="How would you rate your overall connection with your date?"
            name="first"
            rules={[{ required: true, message: "Please select a rating!" }]}
          >
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              <Radio value={0}>01 (No connection at all)</Radio>
              <Radio value={1}>2</Radio>
              <Radio value={2}>3</Radio>
              <Radio value={3}>4</Radio>
              <Radio value={4}>5 (Strong connection)</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Did you feel comfortable with your match during the date?"
            name="second"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              <Radio value={0}>Yes</Radio>
              <Radio value={1}>Somewhat</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name={"third"} label="Please describe what stood out to you about your match (positive or negative)." >
            <Input.TextArea rows={4} placeholder="Write here"  className='border-[#FFA175] bg-[#FCE7D3] ' />
          </Form.Item>

          {/* Chemistry and Compatibility */}
          <Form.Item
            label="How would you rate the chemistry you felt with your match?"
            name="fourth"
            rules={[{ required: true, message: "Please select a rating!" }]}
          >
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              <Radio value={0}>01 (No chemistry)</Radio>
              <Radio value={1}>2</Radio>
              <Radio value={2}>3</Radio>
              <Radio value={3}>4</Radio>
              <Radio value={4}>5 (Strong chemistry)</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Do you feel that the AI matchmaking captured your preferences accurately?"
            name="fifth"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              <Radio value={0}>Yes</Radio>
              <Radio value={1}>Somewhat</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            {/* <Link to={'/feedback-second-step'}> */}
            <AuthButton type="primary" htmlType="submit" className="w-full py-2">
              Next
            </AuthButton>
            {/* </Link> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default FeedbackOne