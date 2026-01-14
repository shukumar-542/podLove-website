import { useState } from "react";
import {
  Form,
  Radio,
  Select,
  Button,
  ConfigProvider,
  Modal,
  Slider,
} from "antd";
import { usePostFirstSurveyMutation } from "../../redux/Api/PodcastApi";

const SecondSurvey = ({ isSecondModalOpen, handleSecondOk, podcastId }) => {
  const [form] = Form.useForm();
  const [seeAgain, setSeeAgain] = useState(null);

  const onSeeAgainChange = (e) => {
    setSeeAgain(e.target.value);
  };
  const [postFirstSurvey, { isLoading }] = usePostFirstSurveyMutation();

  const onFinish = (values) => {
    const dataToSend = {
      podcastId,
      scheduleStatus: "2nd",
      responses: [
        {
          question: "ow well did your match meet your expectations in person?",
          answer: values.matchExpectations,
        },
        {
          question:
            "Did the connection feel stronger, weaker, or the same as during the podcast?",
          answer: values.connectionStrength,
        },
        {
          question: "Would you see this person again?",
          answer: values.seeAgain,
        },
        {
          question: "If No, what was the primary reason?",
          answer: values.noReason,
        },
        {
          question: "What would improve future matches for you?",
          answer: values.improveMatch,
        },
      ],
    };

    postFirstSurvey(dataToSend)
      .unwrap()
      .then(() => {
        window.location.reload();
        handleSecondOk();
      })
      .catch();
  };

  return (
    <Modal
      footer={false}
      centered
      width={800}
      open={isSecondModalOpen}
      onCancel={handleSecondOk}
    >
      <div className="md:px-12 py-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            Tell us about your date
          </h1>
          <p className="text-lg">
            We&apos;d love to hear about your experience with your second date!
          </p>
        </div>

        <ConfigProvider
          theme={{
            components: {
              Slider: {
                handleActiveColor: "rgb(255,161,117)",
                handleActiveOutlineColor: "rgba(255,161,117,0.44)",
                dotActiveBorderColor: "rgb(255,161,117)",
                handleColor: "rgb(255,161,117)",
                trackBg: "rgb(255,161,117)",
                trackHoverBg: "rgb(255,161,117)",
                colorPrimaryBorderHover: "rgb(255,161,117)",
                handleLineWidth: 4,
                handleLineWidthHover: 6.5,
                handleSizeHover: 16,
                railSize: 8,
              },
              Radio: { colorPrimary: "rgb(255,161,117)" },
            },
          }}
        >
          <Form form={form} onFinish={onFinish} layout="vertical">
            {/* First Question */}
            <Form.Item
              name="matchExpectations"
              rules={[
                {
                  required: true,
                  message: "Please rate your match expectations!",
                },
              ]}
              label="How well did your match meet your expectations in person?"
              valuePropName="value"
            >
              <Slider min={1} max={5} />
            </Form.Item>

            {/* Second Question */}
            <Form.Item
              name="connectionStrength"
              rules={[
                {
                  required: true,
                  message: "Please select the connection strength!",
                },
              ]}
              label="Did the connection feel stronger, weaker, or the same as during the podcast?"
            >
              <Radio.Group>
                <Radio value="Stronger">Stronger</Radio>
                <Radio value="Weaker">Weaker</Radio>
                <Radio value="The Same">The Same</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Third Question */}
            <Form.Item
              name="seeAgain"
              rules={[{ required: true, message: "Please select an option!" }]}
              label="Would you see this person again?"
            >
              <Radio.Group onChange={onSeeAgainChange}>
                <Radio value="Yes">Yes</Radio>
                <Radio value="Maybe">Maybe</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Fourth Question (Visible only if "No" is selected for "Would you see this person again?") */}
            {seeAgain === "No" && (
              <Form.Item
                name="noReason"
                rules={[
                  {
                    required: true,
                    message:
                      "Please select a reason for not wanting to see them again!",
                  },
                ]}
                label="If 'No,' what was the primary reason?"
              >
                <Select placeholder="Select a reason">
                  <Select.Option value="No chemistry">
                    No chemistry
                  </Select.Option>
                  <Select.Option value="Different goals">
                    Different goals
                  </Select.Option>
                  <Select.Option value="Poor communication">
                    Poor communication
                  </Select.Option>
                  <Select.Option value="Personality mismatch">
                    Personality mismatch
                  </Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>
            )}

            {/* Fifth Question */}
            <Form.Item
              name="improveMatch"
              rules={[
                { required: true, message: "Please select an improvement!" },
              ]}
              label="What would improve future matches for you?"
            >
              <Select placeholder="Select an improvement">
                <Select.Option value="More aligned values/goals">
                  More aligned values/goals
                </Select.Option>
                <Select.Option value="Better communication style">
                  Better communication style
                </Select.Option>
                <Select.Option value="Greater attraction">
                  Greater attraction
                </Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isLoading}
                block
                style={{ background: "#ffa175", borderColor: "#ffa175" }}
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    </Modal>
  );
};

export default SecondSurvey;
