function WhyChooseUs({ service }) {
  return (
    <div className="bg-gray-50 px-5 py-8">
      <p className="text-mono text-center font-semibold text-amber-500 mb-4">INNOVATIVE IDEAS & STYLISH DESIGNS</p>
      <h1 className="text-2xl text-center font-semibold mb-10">Why to Choose Us?</h1>

      <div className="choose-us-container grid grid-cols-1 lg:grid-cols-3 gap-10">
        {service.map((data) => (
          <div
            key={data?.id}
            className='flex flex-col items-center'>
            <img src={data?.logo} alt="" className="h-28" />
            <h2 className='text-base font-semibold text-gray-700 text-center '>{data?.title}</h2>
            <p className='text-center text-xs text-gray-500 font-sans'>{data?.content}</p>
          </div>
        ))}

      </div>
    </div>
  )
};

export default WhyChooseUs;