import { Modal, } from 'antd';
import { LuCircleAlert } from 'react-icons/lu';

// eslint-disable-next-line react/prop-types
const AttentionModal = ({ isModalOpen, handleOk, handleCancel }) => {

    return (
        <Modal
            title={null}
            footer={false}
            centered
            width={900}
            open={isModalOpen}
            handleOk={handleOk}
            onCancel={handleCancel}
        >
            <div className=' flex flex-col items-center gap-5 py-5 md:py-10 md:px-8'>
                <LuCircleAlert size={100} className='text-[#ffa175]' />
                <h1 className=' text-4xl font-semibold'>Attention!</h1>
                <p className=' text-lg'>Thank you for your interest in PodLove. Based on your responses, it seems our app may not be the right fit for you at this time. We appreciate you exploring our platform and wish you the best in finding the connections you&apos;re looking for. Feel free to check back with us in the future!</p>
                <a href={`/`}><button className=' bg-[#ffa175] px-5 py-3 text-lg text-white rounded-md cursor-pointer'>Go Back</button></a>
            </div>
        </Modal >
    );
};

export default AttentionModal;
