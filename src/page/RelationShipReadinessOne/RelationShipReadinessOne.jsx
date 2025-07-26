import { Form, Radio } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Link } from "react-router";

const RelationshipReadinessOneForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form Submitted:", values);
    };

    return (
        <div className="p-6 bg-[#FCE7D3] min-h-screen flex justify-center items-center">
            <div className=" rounded-xl p-8 max-w-3xl w-full text-[#333] font-sans">
                <h1 className="text-center text-xl font-bold mb-8">
                    Your Relationship Readiness Check-In
                </h1>

                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                    className="space-y-6"
                >
                    {/* Q1 */}
                    <Form.Item
                        label={
                            <span className="font-semibold">
                                I am emotionally available and ready to invest in a serious relationship.
                            </span>
                        }
                        name="emotionallyAvailable"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex flex-col space-y-2 custom-radio">
                            <Radio value="Strongly Disagree">Strongly Disagree</Radio>
                            <Radio value="Disagree">Disagree</Radio>
                            <Radio value="Neutral">Neutral</Radio>
                            <Radio value="Agree">Agree</Radio>
                            <Radio value="Strongly Agree">Strongly Agree</Radio>
                        </Radio.Group>
                    </Form.Item>

                    {/* Q2 */}
                    <Form.Item
                        label="I have resolved most of my past relationship baggage and am ready to move forward."
                        name="resolvedPast"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex space-x-8 custom-radio">
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                        </Radio.Group>
                    </Form.Item>

                    {/* Q3 */}
                    <Form.Item
                        label="I prioritize being in a committed relationship."
                        name="committedRelationship"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex flex-col space-y-2 custom-radio">
                            <Radio value="Strongly Disagree">Strongly Disagree</Radio>
                            <Radio value="Disagree">Disagree</Radio>
                            <Radio value="Neutral">Neutral</Radio>
                            <Radio value="Agree">Agree</Radio>
                            <Radio value="Strongly Agree">Strongly Agree</Radio>
                        </Radio.Group>
                    </Form.Item>

                    {/* Q4 */}
                    <Form.Item
                        label="Have you worked on yourself to become a better partner?"
                        name="workedOnYourself"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex space-x-6 flex-wrap custom-radio">
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                            <Radio value="Not sure yet">Not sure yet</Radio>
                        </Radio.Group>
                    </Form.Item>

                    {/* Q5 */}
                    <Form.Item
                        label="I am willing to invest time in deep conversations to truly understand my partner."
                        name="investInConversation"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex space-x-8 custom-radio">
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                        </Radio.Group>
                    </Form.Item>

                    {/* Q6 */}
                    <Form.Item
                        label="I believe that building a strong relationship takes time and intentional effort."
                        name="strongRelationshipEffort"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex flex-col space-y-2 custom-radio">
                            <Radio value="Strongly Disagree">Strongly Disagree</Radio>
                            <Radio value="Disagree">Disagree</Radio>
                            <Radio value="Neutral">Neutral</Radio>
                            <Radio value="Agree">Agree</Radio>
                            <Radio value="Strongly Agree">Strongly Agree</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item className="text-center">
                        <div className="flex justify-center">
                            <Link to={"/relationship-second"}>
                                <AuthButton className={"py-2"}>
                                    Next
                                </AuthButton>
                            </Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RelationshipReadinessOneForm;
