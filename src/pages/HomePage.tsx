import SearchBar from "../components/SearchBar";
import React, {useState} from "react";
import { FaCube } from "react-icons/fa";
import { data } from "../utilities/DataSteps";
import { FaWallet, FaUser } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Colors } from "../utilities/Color";
import { SlEarphonesAlt } from "react-icons/sl";
import CardCar from "../components/CardCar";
import { CarDatas } from "../utilities/CarDatas";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft,  MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Button from "../components/Button";
import { Link } from "react-router-dom";


interface propsData {
  Datas: data[];
}

const HomePage: React.FC<propsData> = ({ Datas }) => {
    const [open, setOpen]=useState(false)
  return (
    <div className=" pt-36">
      <div className=" mb-5">
        <div className="md:grid grid-cols-3 md:mx-24 mx-8">
          <div className="mx-auto">
            <div>
              <h1 className="md:text-5xl text-2xl text-gray-900 font-extrabold leading-tight">
                Best Place to Rented a Dream car
              </h1>
              <p className="md:text-2xl text-xl text-gray-400 mt-4 ">
                Car-rent, is ready to serve the best experience in car rental.
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden md:flex">
            <div>
              <img src="../../src/assets/images/world-map-vector-free-download-6-1.png" />
            </div>
          </div>
          <div className="absolute ml-[30em] hidden md:flex">
            <div className="w-[48rem]">
              <img src="../../src/assets/images/mazda_PNG79.png" />
            </div>
          </div>
          <div className="md:absolute md:mt-72 ">
            <SearchBar />
          </div>
        </div>
        {/* Part 2 */}
        <div className=" bg-gray-200 ">
          <div className="md:mt-40 md:py-20 py-10 mx-24">
            <div className="text-center">
              <p className="md:text-xl text-lg text-gray-700">HOW IT WORKS</p>
            </div>
            <div className="text-center mt-3">
              <h1 className="font-bold md:text-3xl text-xl">
                Rent with following 3 working steps
              </h1>
            </div>
            <div className="md:flex justify-between mt-10 ">
              {Datas.map(({ id, title, description }) => (
                <div className="mt-5 md:mt-0" key={id}>
                  <div className=" flex items-center justify-center ">
                    <div className="bg-white py-7 px-7 rounded-xl">
                      <FaCube size={45} />
                    </div>
                  </div>
                  <div className=" mt-3 text-center w-60">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="text-lg mt-3 text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="md:grid grid-cols-2 md:mx-24 mx-8 py-10">
          <div className="md:my-auto ">
            <div className="hidden md:flex">
              <img src="../../src/assets/images/world-map-vector-free-download-6-1.png" />
            </div>
          </div>
          <div className="md:ml-10 ">
            <div>
              <p className="text-gray-700 md:text-xl text-lg">WHY CHOOSE US</p>
              <h1 className="md:text-3xl text-xl font-bold mt-3">
                We offer the best experience with our rental deals
              </h1>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-5 mb-3">
                <div>
                  <FaWallet size={20} color={Colors.main} />
                </div>
                <div>
                  <h1 className="font-bold">Best price guaranteed</h1>
                  <p className="text-gray-700">
                    Find a lower price? We'll refund you 100% the difference.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-3">
                <div>
                  <FaUser size={20} color={Colors.main} />
                </div>
                <div>
                  <h1 className="font-bold">Experience driver</h1>
                  <p className="text-gray-700">
                    Don't have a driver? Don't worry, we have many experience
                    driver for you.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-3">
                <div>
                  <SiHomeassistantcommunitystore
                    size={20}
                    color={Colors.main}
                  />
                </div>
                <div>
                  <h1 className="font-bold">24-hour car delivery</h1>
                  <p className="text-gray-700">
                    Book your car anytime and we will deliver direct to you.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <SlEarphonesAlt size={20} color={Colors.main} />
                </div>
                <div>
                  <h1 className="font-bold">24/7 technical support</h1>
                  <p className="text-gray-700">
                    Have a question ? Contact Car-rent support anytime when you
                    have problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:absolute hidden md:flex mt-20 ">
            <div className="w-[35rem]">
              <img src="../../src/assets/images/mercedes-amg-car-png-image-pngpix-9.png" />
            </div>
          </div>
        </div>

        {/* Part 4 */}

        <div className="bg-gray-200 pb-10">
          <div className="md:mx-24 mx-8">
            <div className="text-center py-6">
              <p className="text-gray-700 text-lg">POPULAR RENTAL DEALS</p>
              <h1 className="font-bold text-2xl mt-2">
                Most popular cars rental deals
              </h1>
            </div>
            <div>
              <div className="md:flex gap-6">
                {CarDatas.map(
                  ({ title, type, img, litre, func, place, price, id }) => (
                    <Link to={`/allvehicles/detail/${id}`}>
                        <CardCar title={title} type={type} img={img} litre={litre} func={func} place={place} price={price} />
                    </Link>
                  )
                )}
              </div>
              <div className="flex items-center justify-center  mt-10">
                <div className="border border-black hover:text-white hover:border-white hover:bg-orange-500 transition ease-in duration-200 cursor-pointer flex items-center justify-center py-2 px-9 rounded-3xl">
                  <Link to={"/allvehicles"}>
                      <h1>Show All Vehicles</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 5 */}

        <div>
            <div className="text-center mt-10">
                <p className="text-gray-700 text-xl">TESTIMONIALS</p>
                <h1 className="font-bold text-2xl">What people say about us?</h1>
            </div>
            <div className="flex mt-6 justify-center">
                <div className="w-72">
                  <p className="   text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ad quidem vel, deserunt natus ut quibusdam error voluptatibus. Quam officiis minima mollitia exercitationem quas recusandae, sint animi iure sed est?</p>
                  <p className=" text-center font-bold mt-2">Unknow</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 mt-5">
                <div className="cursor-pointer border border-black rounded-full hover:bg-orange-500 hover:text-white hover:border-white transition duration-200 ease-in">
                    <MdOutlineKeyboardArrowLeft size={30}/>
                </div>
                <div className="cursor-pointer border border-black rounded-full  hover:bg-orange-500 hover:text-white hover:border-white transition duration-200 ease-in">
                    <MdOutlineKeyboardArrowRight size={30}/>
                </div>
            </div>
        </div>
        {/* Part 6 */}

        <div className="bg-gray-200 pb-12">
            <div className="text-center pt-5 mt-5">
                <p className="text-gray-700 md:text-xl text-lg">FAQs</p>
                <h1 className="font-bold md:text-2xl text-lg">Some of our frequently asked questions</h1>
            </div>
            <div className="md:mx-24 mx-8 mt-10">
                <div onClick={()=>setOpen(!open)} className={`cursor-pointer bg-white rounded-lg border border-gray-300 ${open&&'border-orange-500'}`}>
                   <div className={ `flex justify-between items-center   p-6 ${open&&" border-b"}` }>
                    <h1 className="font-bold md:text-xl">What are the service provided to customers ?</h1>
                        {
                          open ? <MdOutlineKeyboardArrowUp size={30} /> : <MdOutlineKeyboardArrowDown size={30} />
                        }
                   </div>
                {
                    open && (
                        <div className=" p-4">
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit tempora, quasi soluta ab eveniet, optio ea reprehenderit consequatur amet illum at necessitatibus maxime harum repellendus nesciunt expedita facilis quis ratione.</p>
                        </div>
                    )
                }
                </div>
            </div>
        </div>

        {/* Part 7 */}
        <div>
        <div className="text-center pt-5 mt-5">
                <p className="text-gray-700 md:text-xl">CONTACT US</p>
                <h1 className="font-bold md:text-2xl text-lg">Please fill this and fell to contact us</h1>
                <div className="md:grid grid-cols-2 md:mt-10 md:mx-24 mx-8">
                  <form className="flex items-center justify-center" >
                    <div>
                      <input type="text" placeholder="Your Name*" className="border border-gray-400 p-3 outline-none md:w-96 w-80 mt-5" />
                      <input type="text" placeholder="Your Email*" className="border border-gray-400 p-3 outline-none md:w-96 w-80 mt-5" />
                      <textarea  placeholder="Your Message*" className="border border-gray-400 p-3 outline-none md:w-96 w-80 mt-5" />
                      <div className="mt-8">
                        <Button title="Send a Message" />
                      </div>
                    </div>
                  </form>
                 <div className="md:flex hidden items-center justify-center">
                 <div className="w-72">
                    <img src="https://media.istockphoto.com/id/1475343314/vector/car-rental-design-concept.jpg?s=612x612&w=0&k=20&c=xqzqnacxDhMSK1mXwfrgUF98_TkJi2xbBoaej3Yl3Cs="  />
                  </div>
                 </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
