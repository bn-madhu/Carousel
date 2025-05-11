import React, { useState } from 'react'

const CarouselContainer = () => {

  const [startIndex, setStartIndex] = useState(1);

  const testimonials = [
    {
      text: "This app completely transformed the way I manage my tasks. It's fast, intuitive, and just works!",
      name: "Alice Johnson",
      role: "Product Manager",
    },
    {
      text: "Exceptional design and user experience. I recommend it to all my colleagues.",
      name: "Carlos Martinez",
      role: "UI/UX Designer",
    },
    {
      text: "Reliable and efficient — I've never had a smoother experience with an app like this.",
      name: "Priya Nair",
      role: "Software Engineer",
    },
    {
      text: "The customer support is excellent. Every question I had was answered quickly and clearly.",
      name: "James Thompson",
      role: "Freelancer",
    },
    {
      text: "I've tried many tools, but this one stands out. It's both powerful and easy to use.",
      name: "Mina Lee",
      role: "Marketing Lead",
    },
  ];

  const getWrapper = (index, length) => {
    return (index + length) % length;
  }

  const handelNextSlide = () => {
    setTimeout(()=>{
      setStartIndex((prev)=>getWrapper(prev+1, testimonials.length));
    },300)
  }

  const handelPrevSlide = () => {
    setTimeout(()=>{
      setStartIndex((prev)=>getWrapper(prev-1, testimonials.length));
    },300)
  }

  const visible = [
    testimonials[getWrapper(startIndex, testimonials.length)],
    testimonials[getWrapper(startIndex + 1, testimonials.length)],
    testimonials[getWrapper(startIndex + 2, testimonials.length)],
  ];

  return (
    <div className='carousel-container relative'>
      <div className="btn-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-4 sm:px-8 md:px-4 lg:px-32">
        <button onClick={()=>handelPrevSlide()} className="btn prev border border-gray-400 p-4 rounded-full cursor-pointer bg-slate-200 hover:border-blue-800 hover:bg-blue-600 hover:text-white w-auto focus:bg-blue-800 focus:text-white h-14" onMouseLeave={(e)=>{e.currentTarget.blur()}}>Left</button>
        <button onClick={()=>handelNextSlide()} className="btn next border border-gray-400 p-4 rounded-full cursor-pointer bg-slate-200 hover:border-blue-800 hover:bg-blue-600 hover:text-white w-auto focus:bg-blue-800 focus:text-white h-14" onMouseLeave={(e)=>{e.currentTarget.blur()}}>Right</button>
      </div>
      <div className="content relative overflow-hidden flex items-center justify-center w-full px-12">
        <div className={`wrapper overflow-hidden flex items-center gap-4 transition-all duration-300 w-full max-w-full md:max-w-[765px] px-4 p-4 my-6 rounded`} style={{boxShadow:"0 0 24px #9090CC"}}>
          {visible.map((content,index) => {
            const isActive = index === 1;
            return(
            <>
              <div key={index} className={`card p-4 border rounded border-gray-400 w-full sm:w-[220px] md:w-[240px] flex-shrink-0 ${isActive ? 'bg-blue-600 border-blue-800' : ''}`}>
                <p className={`font-semibold text-xl lg:text-2xl mb-4 text-left ${isActive ? 'text-white' : ''}`}>{content?.name}</p>
                <p className={`text-base text-gray-600 h-40 ${isActive ? 'text-white' : ''}`}>{content?.text}</p>
                <p className={`text-right font-semibold ${isActive ? 'text-white' : ''}`}>{content?.role}</p>
              </div>
            </>
          )})}
        </div>
      </div>
      <div className="dots flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => {
          const isActive = idx === getWrapper(startIndex + 1, testimonials.length); // center item
          return (
            <span
              key={idx}
              className={`dot h-3 w-3 rounded-full inline-block cursor-pointer ${
                isActive ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              onClick={() => setStartIndex(getWrapper(idx - 1, testimonials.length))}
            ></span>
          );
        })}
      </div>
    </div>
  )
}

export default CarouselContainer