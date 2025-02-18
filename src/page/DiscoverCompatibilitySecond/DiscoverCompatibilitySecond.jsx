import React from "react";
import logo from "../../assets/podLogo.png";
import { Checkbox, Form, Input, Radio, Space } from "antd";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";

const DiscoverCompatibilitySecond = () => {
  return (
    <div className="bg-[#FBECE5] min-h-screen">
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center flex-col mb-10">
          <img className="w-[267px] " src={logo} alt="" />
          <p className="text-[36px] font-medium font-poppins mt-5 text-[#242424]">
            Discover Compatibility
          </p>
        </div>

        <Form layout="vertical">
          {/* Do you have kids? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">Do you have kids?*</p>}>
            <Radio.Group className="flex flex-col gap-3 custom-radio">
              <Radio value="no">No</Radio>
              <Radio value="yes">Yes</Radio>
            </Radio.Group>
          </Form.Item>

          {/* How many kids? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">If yes, how many kids do you have?</p>}>
            <Input
              placeholder="Enter number of kids"
              className="max-w-52 bg-[#FBECE5] hover:bg-[#FBECE5]"
            />
          </Form.Item>

          {/* Do you want kids in the future? */}
          <Form.Item  label={<p className="font-medium font-poppins text-xl">Do you want kids in the future?</p>}>
            <Radio.Group className="flex flex-col gap-3 custom-radio">
              <Radio value="yes">Yes</Radio>
              <Radio value="maybe">Maybe</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Do you smoke? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">Do you smoke?</p>}>
            <Radio.Group className="flex flex-col gap-5 custom-radio">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          {/* How would you describe your drinking habits? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">How would you describe your drinking habits?</p>} >
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="never">Never</Checkbox>
                <Checkbox value="social">Socially</Checkbox>
                <Checkbox value="regularly">Regularly</Checkbox>
                <Checkbox value="occasionally">Occasionally</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          {/* Are you comfortable dating someone who drinks? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">Would you be comfortable dating someone who drinks?</p>} >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Do you consider yourself religious or spiritual? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">Do you consider yourself religious or spiritual?</p>}  >
            <Radio.Group>
              <Radio value="religious">Religious</Radio>
              <Radio value="spiritual">Spiritual</Radio>
              <Radio value="not_sure">Not sure</Radio>
              <Radio value="not_religious">Not religious</Radio>
            </Radio.Group>
          </Form.Item>

          {/* If Religious, which religion? */}
          <Form.Item label={<p className="font-medium font-poppins text-xl">If religious, what is your religion?</p>}>
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="christian">Christian</Checkbox>
                <Checkbox value="muslim">Muslim</Checkbox>
                <Checkbox value="hindu">Hindu</Checkbox>
                <Checkbox value="buddhist">Buddhist</Checkbox>
                <Checkbox value="other">Other</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          {/* If Spiritual, describe beliefs */}
          <Form.Item  label={<p className="font-medium font-poppins text-xl">If Spiritual, describe your spiritual beliefs</p>}>
            <Input.TextArea className="w-96 bg-[#FBECE5] hover:bg-[#FBECE5]" placeholder="Write here..." />
          </Form.Item>

          {/* How important is religion/spirituality in your life? */}
          <Form.Item  label={<p className="font-medium font-poppins text-xl">How important is religion/spirituality in your life?</p>}>
            <Radio.Group className="flex flex-col gap-3 custom-radio">
              <Radio value="very">Very important</Radio>
              <Radio value="moderate">Moderately important</Radio>
              <Radio value="not_important">Not very important</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Would you date someone with different beliefs? */}
          <Form.Item  label={<p className="font-medium font-poppins text-xl">Would you date someone with different religious or spiritual beliefs?</p>} >
            <Radio.Group className="flex flex-col gap-3 custom-radio">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
              <Radio value="depends">Depends on how different</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Do you have a pet? */}
          <Form.Item  label={<p className="font-medium font-poppins text-xl">Do you have a pet?</p>}>
            <Radio.Group className="flex flex-col gap-3 custom-radio">
              <Radio value="dog">Dog</Radio>
              <Radio value="cat">Cat</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Link to={"/rating-yourself"}><AuthButton className={"max-w-80 py-1"}>Submit</AuthButton></Link>
        </Form>
      </div>
    </div>
  );
};

export default DiscoverCompatibilitySecond;
