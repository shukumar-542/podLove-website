import React from 'react'
import { Form, Input, Radio, Button } from "antd";
import AuthButton from '../../component/AuthButton/AuthButton';
const FeedbackThird = () => {
  return (
    <div className="flex justify-center bg-[#FFECE2] p-8 min-h-screen">
      <div className="w-full max-w-3xl bg-[#FFECE2] p-6 rounded-md">
        <h2 className="text-center font-bold text-lg">
          Thank you for joining our Pod Love! Your feedback is crucial in helping
          us improve the PodLove experience for you and others. Please take a few
          moments to share your thoughts.
        </h2>

        <Form layout="vertical">
          {/* Overall Connection */}
          <h3 className="mt-6 font-semibold">1. Overall Connection</h3>
          <Form.Item label="How would you rate your overall connection with your date? *" name="overallConnection">
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              {["01 (No connection at all)", "2", "3", "4", "5 (Strong connection)"].map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Did you feel comfortable with your match during the date? *" name="comfortable">
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              {["Yes", "Somewhat", "No"].map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Please describe what stood out to you about your match (positive or negative).">
            <Input.TextArea placeholder="Write here" />
          </Form.Item>

          {/* Chemistry and Compatibility */}
          <h3 className="mt-6 font-semibold">2. Chemistry and Compatibility</h3>
          <Form.Item label="How would you rate the chemistry you felt with your match? *" name="chemistry">
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              {["01 (No chemistry)", "2", "3", "4", "5 (Strong chemistry)"].map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Do you feel that the AI matchmaking captured your preferences accurately? *" name="aiMatchmaking">
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              {["Yes", "Somewhat", "No"].map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          
          {/* Communication and Comfort */}
          <h3 className="mt-6 font-semibold">3. Communication and Comfort</h3>
          <Form.Item label="How would you rate the quality of communication during the date? *" name="communicationQuality">
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              {["01 (Poor communication)", "2", "3", "4", "5 (Excellent communication)"].map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Did you feel comfortable being yourself during the date? *" name="comfortableBeingYourself">
            <Radio.Group className='flex flex-col space-y-2 custom-radio'>
              {["Yes", "Somewhat", "No"].map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Were there any awkward or uncomfortable moments? If so, please describe.">
            <Input.TextArea placeholder="Write here" />
          </Form.Item>
          
          {/* Next Button */}
          <Form.Item>
            <AuthButton type="primary" htmlType="submit" className="w-full py-1 bg-[#F48C72]">
              Submit
            </AuthButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default FeedbackThird