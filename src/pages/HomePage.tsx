import SearchBar from "../components/SearchBar";
import React from "react";
import { FaCube } from "react-icons/fa";
import { data } from "../utilities/DataSteps";
import { FaWallet, FaUser } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Colors } from "../utilities/Color";
import { SlEarphonesAlt } from "react-icons/sl";
import CardCar from "../components/CardCar";
import { CarDatas } from "../utilities/CarDatas";
import { MdOutlineKeyboardArrowLeft,  MdOutlineKeyboardArrowRight } from "react-icons/md";


interface propsData {
  Datas: data[];
}

const HomePage: React.FC<propsData> = ({ Datas }) => {
  return (
    <div className=" pt-36">
      <div className=" mb-5">
        <div className="grid grid-cols-3 mx-24 ">
          <div className="mx-auto">
            <div>
              <h1 className="text-5xl text-gray-900 font-extrabold leading-tight">
                Best Place to Rented a Dream car
              </h1>
              <p className="text-2xl text-gray-400 mt-4 ">
                Car-rent, is ready to serve the best experience in car rental.
              </p>
            </div>
          </div>
          <div className="col-span-2 ">
            <div>
              <img src="../../src/assets/images/world-map-vector-free-download-6-1.png" />
            </div>
          </div>
          <div className="absolute ml-[30em]">
            <div className="w-[48rem]">
              <img src="../../src/assets/images/mazda_PNG79.png" />
            </div>
          </div>
          <div className="absolute mt-72">
            <SearchBar />
          </div>
        </div>
        {/* Part 2 */}
        <div className=" bg-gray-200 ">
          <div className="mt-40 py-20 mx-24">
            <div className="text-center">
              <p className="text-xl text-gray-700">HOW IT WORKS</p>
            </div>
            <div className="text-center mt-3">
              <h1 className="font-bold text-3xl">
                Rent with following 3 working steps
              </h1>
            </div>
            <div className="flex justify-between mt-10 ">
              {Datas.map(({ id, title, description }) => (
                <div className="" key={id}>
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
        <div className="grid grid-cols-2 mx-24 py-10">
          <div className="my-auto ">
            <div>
              <img src="../../src/assets/images/world-map-vector-free-download-6-1.png" />
            </div>
          </div>
          <div className="ml-10 ">
            <div>
              <p className="text-gray-700 text-xl">WHY CHOOSE US</p>
              <h1 className="text-3xl font-bold mt-3">
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
          <div className="absolute mt-20 ">
            <div className="w-[35rem]">
              <img src="../../src/assets/images/mercedes-amg-car-png-image-pngpix-9.png" />
            </div>
          </div>
        </div>

        {/* Part 4 */}

        <div className="bg-gray-200 pb-10">
          <div className="mx-24">
            <div className="text-center py-6">
              <p className="text-gray-700 text-lg">POPULAR RENTAL DEALS</p>
              <h1 className="font-bold text-2xl mt-2">
                Most popular cars rental deals
              </h1>
            </div>
            <div>
              <div className="flex gap-6">
                {CarDatas.map(
                  ({ title, type, img, litre, func, place, price }) => (
                    <CardCar title={title} type={type} img={img} litre={litre} func={func} place={place} price={price} />
                  )
                )}
              </div>
              <div className="flex items-center justify-center  mt-10">
                <div className="border border-black hover:text-white hover:border-white hover:bg-orange-500 transition ease-in duration-200 cursor-pointer flex items-center justify-center py-2 px-9 rounded-3xl">
                  <h1>Show All Vehicles</h1>
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
                <div>
                <p className="w-[40em] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ad quidem vel, deserunt natus ut quibusdam error voluptatibus. Quam officiis minima mollitia exercitationem quas recusandae, sint animi iure sed est?</p>
                <p className="w-[40em] text-center font-bold mt-2">Unknow</p>
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
      </div>
    </div>
  );
};

export default HomePage;
