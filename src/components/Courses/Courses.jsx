import React from 'react'

const Courses = () => {
  return (
    <div className="mb-5">
    <div className="max-w-[1140px] mx-auto mt-20">
        <div className="md:flex justify-between space-y-14 md:space-y-0 md:space-x-4 rtl:space-x-reverse m-4">
            <div className="bg-white border border-white-light  rounded transition-all duration-300 group">
                <div className="border-b border-white-light p-5 pt-0">
                    <span className="bg-white border-blue-400  border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[10px_10px_15px_1px_rgba(13,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                        $49
                    </span>
                    <h3 className="text-2xl lg:text-4xl mt-4 mb-2.5 font-second">Freelancer</h3>
                    <p className="text-[15px] font-primary font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="p-5">
                    <ul className="space-y-2.5 mb-5 font-medium font">
                        <li>Support forum</li>
                        <li>Free hosting</li>
                        <li>2 hours of support</li>
                        <li>5GB of storage space</li>
                    </ul>
                    <a href='/problems'>
                    <button type="button" className="btn btn-primary w-full bg-blue-700 rounded-[5px] p-[10px] text-white border-[1px] border-gray-200 hover:shadow-[5px_5px_10px_rgba(150,150,150)] transition-all duration-200">
                        Free try
                    </button>
                    </a>
                </div>
            </div>

            <div className="bg-white border border-white-light  rounded transition-all duration-300 group">
                <div className="border-b border-white-light p-5 pt-0">
                    <span className="bg-white border-blue-400  border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[10px_10px_15px_1px_rgba(13,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                        $49
                    </span>
                    <h3 className="text-2xl lg:text-4xl mt-4 mb-2.5 font-second">Freelancer</h3>
                    <p className="text-[15px] font-primary font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="p-5">
                    <ul className="space-y-2.5 mb-5 font-medium font">
                        <li>Support forum</li>
                        <li>Free hosting</li>
                        <li>2 hours of support</li>
                        <li>5GB of storage space</li>
                    </ul>
                    <button type="button" className="btn btn-primary w-full bg-blue-700 rounded-[5px] p-[10px] text-white border-[1px] border-gray-200 hover:shadow-[5px_5px_10px_rgba(150,150,150)] transition-all duration-200">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="bg-white border border-white-light  rounded transition-all duration-300 group">
                <div className="border-b border-white-light p-5 pt-0">
                    <span className="bg-white border-blue-400  border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[10px_10px_15px_1px_rgba(13,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                        $49
                    </span>
                    <h3 className="text-2xl lg:text-4xl mt-4 mb-2.5 font-second">Freelancer</h3>
                    <p className="text-[15px] font-primary font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="p-5">
                    <ul className="space-y-2.5 mb-5 font-medium font">
                        <li>Support forum</li>
                        <li>Free hosting</li>
                        <li>2 hours of support</li>
                        <li>5GB of storage space</li>
                    </ul>
                    <button type="button" className="btn btn-primary w-full bg-blue-700 rounded-[5px] p-[10px] text-white border-[1px] border-gray-200 hover:shadow-[5px_5px_10px_rgba(150,150,150)] transition-all duration-200">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Courses
