
export default function Footer() {
  return (
    <div className='bg-gray-900 p-8'>
        <div className='md:mx-24 mx-8'>
            <div className='md:grid grid-cols-4 '>
                <div>
                    <h1 className='text-gray-200 text-3xl font-bold'>RentCar</h1>
                    <h1 className='text-gray-200 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, aperiam! Mollitia reiciendis</h1>
                </div>
                <div>
                    <div className="flex">
                        <h1 className='text-gray-200 mt-2 cursor-pointer'>About us</h1>
                    </div>
                    <div className="flex">
                        <h1 className='text-gray-200 mt-2 cursor-pointer'>Company portfolio</h1>
                    </div>
                    <div className="flex">
                        <h1 className='text-gray-200 mt-2 cursor-pointer'>Careers</h1>
                    </div>
                    <div className="flex">
                        <h1 className='text-gray-200 mt-2 cursor-pointer'>Contact us</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-200 mt-2 font-bold '>Contact us</h1>
                    <p className='text-gray-200 mt-2 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    <p className='text-gray-200 mt-2 '>+216</p>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="border-b border-gray-200 mt-5"></div>
        <div className="mt-8">
            <p className='text-gray-200 mt-2 text-center '>Copyright © 2023 Company All rights Recurved</p>
        </div>
    </div>
  )
}
