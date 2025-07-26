import { Form , Radio } from "antd";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";

const RelationShipReadinessTwo = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form Submitted:", values); 
    }
  return (
      <div className="p-6 bg-[#FCE7D3] min-h-screen flex justify-center items-center">
            <div className=" rounded-xl p-8 max-w-3xl w-full text-[#333] font-sans">
                <h1 className="text-center text-xl font-bold mb-8">
                    Your Relationship Readiness Check-In
                </h1>

                <p className="font-medium mt-20">Connection Pathway</p>
                <p className="font-medium mb-5 mt-2">Please Fill out this form</p>
 
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
                               I believe in communicating openly about boundaries with my partner..
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
                        label="It’s important to me that both partners give enthusiastic consent before progressing to physical intimacy."
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
                        label="I am interested in a monogamous, exclusive relationship."
                        name="workedOnYourself"
                        rules={[{ required: true, message: "Please select an option" }]}
                    >
                        <Radio.Group className="flex space-x-6 flex-wrap custom-radio">
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                            <Radio value="Not sure yet">Not sure yet</Radio>
                        </Radio.Group>
                    </Form.Item>

                  

                    <Form.Item className="text-center">
                        <div className="flex justify-center">
                            <Link to={"/attention-error"}>
                                <AuthButton className={"py-2"}>
                                    Next
                                </AuthButton>
                            </Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
  )
}

export default RelationShipReadinessTwo