import React from "react";
import img from "../../assets/bg.png";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { IoArrowDownOutline } from "react-icons/io5";

const { Panel } = Collapse;

const items = [
  {
    key: "1",
    label: "What Is Included In Your Break/Fix Services?",
    content: "Details about Break/Fix Services...",
  },
  {
    key: "2",
    label: "Do You Offer Remote IT Support?",
    content: "Details about Remote IT Support...",
  },
  {
    key: "3",
    label: "How Soon Can You Deliver Network Migration Services?",
    content: "Details about Network Migration Services...",
  },
];

const Faq = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="py-10">
      <div className="text-center">
        <h1 className="text-center text-4xl text-[#5C5C5C]">FAQ</h1>
      </div>

      <div className="container mx-auto mt-10">
          <Collapse
            accordion
            expandIconPosition="end" 
            expandIcon={({ isActive }) => (
              <IoArrowDownOutline
              size={40}
                style={{ color: "white", fontSize: "16px" , backgroundColor : "#E8936A"}}
                className="p-2  rounded-full"
                rotate={isActive ? 180 : 0}
              />
            )}
          >
            {items.map((item) => (
              <Panel
                header={
                  <span className="text-lg font-medium">{item.label}</span>
                }
                key={item.key}
                className="" 
              >
                <p className="my-2 text-gray-600">{item.content}</p>{" "}
                
              </Panel>
            ))}
          </Collapse>
        </div>
    </div>
  );
};

export default Faq;
