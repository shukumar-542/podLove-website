
import bg from "../../assets/isSafe.png";
const IsPodSafe = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className='container mx-auto text-white py-10 px-4 md:px-0'>
        <h1 className='text-2xl font-bold mb-5'>Is PodLove Safe?</h1>
        <p className='max-w-[690px] leading-7'>We follow AWS best practices for security, ensuring that your data is protected at all stages. The information we collect is used exclusively for matching purposes. We never sell or share your data with third parties. Your privacy is our priority, and we are committed to safeguarding it. Rest assured, your data is safe with us.</p>
      </div>
    </div>
  )
}

export default IsPodSafe