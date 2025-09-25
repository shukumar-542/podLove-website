import { Modal } from "antd";
import { useGetPrivacyQuery } from "../../redux/Api/AuthApi";

// eslint-disable-next-line react/prop-types
const PrivacyPolicyModal = ({ isPrivacyModalOpen, handlePrivacyOk, handlePrivacyCancel }) => {
    const { data: getPrivacy } = useGetPrivacyQuery()
    return (
        <Modal
            footer={false}
            centered
            width={800}
            open={isPrivacyModalOpen}
            onOk={handlePrivacyOk}
            onCancel={handlePrivacyCancel}
        >
            <div>
                <div className="container mx-auto">
                    <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
                        Privacy Policy
                    </h1>

                    <div
                        className="text-base text-black font-poppins"
                        // style={{ backgroundColor: "#FAF2EF" }}
                        dangerouslySetInnerHTML={{
                            __html: getPrivacy?.data?.text || "",
                        }}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default PrivacyPolicyModal;