/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Form, Modal, Slider, Radio, Checkbox, Button, ConfigProvider } from 'antd';
import { usePostFirstSurveyMutation } from '../../redux/Api/PodcastApi';

// eslint-disable-next-line react/prop-types
const FirstSurvey = ({ isModalOpen, handleOk, handleCancel, podcastId }) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [form] = Form.useForm();

    const [postFirstSurvey, { isLoading }] = usePostFirstSurveyMutation();

    // Limit to 2 selections for factors
    const onCheckboxChange = (checkedValues) => {
        if (checkedValues.length <= 2) {
            setSelectedValues(checkedValues);
            form.setFieldsValue({ factors: checkedValues });
        }
    };

    const onFinish = (values) => {
        const dataToSend = {
            podcastId,
            scheduleStatus: '1st',
            responses: [
                { question: 'How well did your match align with your interests, values, and relationship goals?', answer: values.matchAlignment },
                { question: 'How would you rate the flow of the conversation?', answer: values.conversationFlow },
                { question: 'Did you feel comfortable being yourself?', answer: values.comfortableBeingYourself },
                { question: 'Did you feel an initial spark or connection?', answer: values.initialSpark },
                { question: 'What factors influenced your connection most?', answer: values.factors },
            ],
        };

        console.log('Submitting:', dataToSend);

        // Submit using your mutation
        postFirstSurvey(dataToSend)
            .unwrap()
            .then(() => handleOk())
            .catch((error) =>console.error(error));
    };

    return (
        <Modal
            title={null}
            footer={false}
            centered
            width={900}
            open={isModalOpen}
        // destroyOnClose
        // onCancel={handleCancel}
        >
            <div className="md:px-12 py-6">
                <div className="text-center mb-8 ">
                    <h1 className=" text-2xl md:text-3xl font-semibold mb-3">Let us know about your first podcast</h1>
                    <p className="text-lg">We&apos;d love to hear about your experience with your first podcast!</p>
                </div>
                <ConfigProvider
                    theme={{
                        components: {
                            Slider: {
                                handleActiveColor: 'rgb(255,161,117)',
                                handleActiveOutlineColor: 'rgba(255,161,117,0.44)',
                                dotActiveBorderColor: 'rgb(255,161,117)',
                                handleColor: 'rgb(255,161,117)',
                                trackBg: 'rgb(255,161,117)',
                                trackHoverBg: 'rgb(255,161,117)',
                                colorPrimaryBorderHover: 'rgb(255,161,117)',
                                handleLineWidth: 4,
                                handleLineWidthHover: 6.5,
                                handleSizeHover: 16,
                                railSize: 8,
                            },
                            Radio: { colorPrimary: 'rgb(255,161,117)' },
                        },
                    }}
                >
                    <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ matchAlignment: 4, conversationFlow: 4, comfortableBeingYourself: '', initialSpark: '', factors: [] }}>
                        {/* First Question */}
                        <Form.Item
                            name="matchAlignment"
                            rules={[{ required: true, message: 'Please rate the alignment!' }]}
                            label="How well did your match align with your interests, values, and relationship goals?"
                        >
                            <Slider min={1} max={5} />
                        </Form.Item>

                        {/* Second Question */}
                        <Form.Item
                            name="conversationFlow"
                            rules={[{ required: true, message: 'Please rate the flow!' }]}
                            label="How would you rate the flow of the conversation?"
                        >
                            <Slider min={1} max={5} />
                        </Form.Item>

                        {/* Third Question */}
                        <Form.Item
                            name="comfortableBeingYourself"
                            rules={[{ required: true, message: 'Please select one!' }]}
                            label="Did you feel comfortable being yourself?"
                        >
                            <Radio.Group>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="Somewhat">Somewhat</Radio>
                                <Radio value="No">No</Radio>
                            </Radio.Group>
                        </Form.Item>

                        {/* Fourth Question */}
                        <Form.Item
                            name="initialSpark"
                            rules={[{ required: true, message: 'Please select one!' }]}
                            label="Did you feel an initial spark or connection?"
                        >
                            <Radio.Group>
                                <Radio value="Strong">Strong</Radio>
                                <Radio value="Somewhat">Somewhat</Radio>
                                <Radio value="No">No</Radio>
                            </Radio.Group>
                        </Form.Item>

                        {/* Fifth Question */}
                        <Form.Item
                            name="factors"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value && value.length === 2
                                            ? Promise.resolve()
                                            : Promise.reject(new Error('Please select exactly 2 factors!')),
                                },
                            ]}
                            label="What factors influenced your connection most? (Pick 2)"
                        >
                            <Checkbox.Group onChange={onCheckboxChange} value={selectedValues}>
                                <div className="space-y-2">
                                    <Checkbox value="Values">Values</Checkbox>
                                    <Checkbox value="Goals">Goals</Checkbox>
                                    <Checkbox value="Interests">Interests</Checkbox>
                                    <Checkbox value="Energy">Energy</Checkbox>
                                    <Checkbox value="Humor">Humor</Checkbox>
                                    <Checkbox value="Attraction">Attraction</Checkbox>
                                    <Checkbox value="Communication Style">Communication Style</Checkbox>
                                </div>
                            </Checkbox.Group>
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={isLoading} block style={{ background: '#ffa175', borderColor: '#ffa175' }}>
                                {isLoading ? 'Loading...' : 'Submit'}
                            </Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
        </Modal >
    );
};

export default FirstSurvey;
