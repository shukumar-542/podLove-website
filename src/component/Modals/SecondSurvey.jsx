import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
const SecondSurvey = ({ isSecondModalOpen, handleSecondOk, handleSecondCancel }) => {

    return (
        <Modal
            footer={false}
            centered
            width={800}
            open={isSecondModalOpen}
            onOk={handleSecondOk}
            onCancel={handleSecondCancel}
        >
            <div>
                <h1>Hello Developer</h1>
            </div>
        </Modal>
    );
};

export default SecondSurvey;