import { Modal } from 'antd';
import { useGetTermsConditionQuery } from '../../redux/Api/AuthApi';


// eslint-disable-next-line react/prop-types
const TermsConditionModal = ({ isTermModalOpen, handleTermOk, handleTermCancel }) => {
    const { data: getTermsCondition } = useGetTermsConditionQuery();
    return (
        <Modal
            // title="Basic Modal"
            footer={false}
            centered
            open={isTermModalOpen}
            onOk={handleTermOk}
            onCancel={handleTermCancel}
            width={800}
        >
            <div className="">
                <div className="container mx-auto">
                    <h1 className="text-2xl text-center font-poppins py-10 font-semibold">
                        Terms Of Use & Conditions
                    </h1>

                    <div
                        className="text-base text-black font-poppins"
                        // style={}
                        dangerouslySetInnerHTML={{
                            __html: getTermsCondition?.data?.text || "",
                        }}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default TermsConditionModal;