import img from "../../assets/bg.png";
import { Collapse } from "antd";
import { IoArrowDownOutline } from "react-icons/io5";
import { useGetFaqQuery } from "../../redux/Api/SubscriptionPlan";

const { Panel } = Collapse;

const Faq = () => {

  const { data: getFaq } = useGetFaqQuery(undefined)
  console.log(getFaq);

  return (
    <div style={{ backgroundImage: `url(${img})` }} className="py-14">
      <div className="text-center">
        <h1 className="text-center text-2xl md:text-4xl text-[#5C5C5C]">FAQ</h1>
      </div>

      <div className="container mx-auto mt-10">
        <Collapse
          accordion
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <IoArrowDownOutline
              size={40}
              style={{
                transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: "white",
                fontSize: "16px",
                backgroundColor: "#E8936A"
              }}
              className="p-2 rounded-full"
            />
          )}
        >
          {
            getFaq?.data?.map((item, index) => (
              <Panel
                key={item?.id || index}
                header={<span className="text-lg font-medium">{item?.question}</span>}
              >
                <p className="my-2 text-gray-600">{item?.answer}</p>
              </Panel>
            ))}
        </Collapse>

      </div>
    </div>
  );
};

export default Faq;
