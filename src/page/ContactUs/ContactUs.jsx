import { Form,  Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import about from '../../assets/about.png'
import AuthButton from '../../component/AuthButton/AuthButton'
import { useCreateContactUsMutation } from '../../redux/Api/SubscriptionPlan'
import { toast } from 'sonner'

const ContactUs = () => {
  const [createContactUs , {isLoading}] = useCreateContactUsMutation()


  const handleContactUs = (values)=>{
    console.log(values);
    const data =  {
      ...values
    }
    createContactUs(data).unwrap()
    .then((payload) => toast.success(payload?.message))
    .catch((error) => toast.error(error?.data?.message));

    
  }
  return (
    <div
    className='bg-[#FAF2EF]'
    >
      <div className='container mx-auto grid  grid-cols-1 md:grid-cols-2 items-center gap-5 py-10'>
        <div>
          <p className='text-center text-2xl font-poppins text-[#1C1C1C] font-semibold mb-5'>Contact Us</p>
          <Form layout='vertical' onFinish={handleContactUs} className='px-5'>
            
            <Form.Item name={"category"} label="Category">
              <Select options={[
                {
                  value : 'Technical',
                  label : 'Technical'
                },
                {
                  value : 'Non-Technical',
                  label : 'Non-Technical'
                }
              ]}
              ></Select>
            </Form.Item>
            <Form.Item name={"description"}>
              <TextArea className='border border-[#F68064] bg-[#FAF2EF]' rows={4}/>
            </Form.Item>

            <AuthButton disabled={isLoading} className={`py-2 ${isLoading && "bg-gray-300"}`}>Sends</AuthButton>
          </Form>
        </div>
        <div>
              <img src={about} className='rounded-md' alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs