import music from '../../assets/music.png'

const ListenAudio = () => {

    return (
        <div className='container mx-auto'>
            <h1 className='text-[#6B4431] text-center text-2xl md:text-4xl font-bold my-10'>Listen to our latest love stories</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto mb-10'>
                <div className='border border-[#FFA175] mx-auto p-10 rounded-md '>
                    <img data-speed="0.2" src={music} alt="" />
                </div>
                <div className='border border-[#FFA175] mx-auto p-10 rounded-md'>
                    <img data-speed="1" src={music} alt="" />
                </div>
                <div data-speed="0.7" className='border border-[#FFA175] mx-auto p-10 rounded-md'>
                    <img src={music} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ListenAudio