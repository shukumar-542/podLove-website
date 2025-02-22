import { Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import about from '../../assets/about.png'
import AuthButton from '../../component/AuthButton/AuthButton'

const ContactUs = () => {
  return (
    <div
    className='bg-[#FAF2EF]'
    >
      <div className='container mx-auto grid  grid-cols-1 md:grid-cols-2 gap-5 py-10'>
        <div>
          <p className='text-center text-2xl font-poppins text-[#1C1C1C] font-semibold mb-5'>Contact Us</p>
          <Form layout='vertical' className='px-5'>
            <Form.Item label="Full Name">
              <Input className='border border-[#F68064] bg-[#FAF2EF]' placeholder='Name'/>
            </Form.Item>
            <Form.Item label="Email">
              <Input className='border border-[#F68064] bg-[#FAF2EF]' placeholder='Email'/>
            </Form.Item>
            <Form.Item label="Category">
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
            <Form.Item>
              <TextArea className='border border-[#F68064] bg-[#FAF2EF]' rows={4}/>
            </Form.Item>

            <AuthButton className={"py-1"}>Send</AuthButton>
          </Form>
        </div>
        <div>
              <img src={about} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs