import { CiHeart } from "react-icons/ci";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSteering2Fill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import Button from "./Button";
import { Colors } from "../utilities/Color";
import React from "react"

interface datas {
    title: string
    type:string
    img:string
    litre:number
    func:string
    place:number
    price:number
}

const CardCar:React.FC<datas>=({title, type, litre, func, place, price, img})=>{
  return (
    <div className="bg-white w-full mb-5 ">
       <div className="p-5">
        <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-lg">{title}</h1>
                    <p className="text-gray-700">{type}</p>
                </div>
                <div className="cursor-pointer">
                    <CiHeart size={35} />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={img} alt="" className="w-60" />
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
                <div className="flex items-center gap-2">
                    <BsFillFuelPumpFill  color={Colors.gray}/>
                    <p className="text-gray-700">{litre}L</p>
                </div>
                <div className="flex items-center gap-2">
                    <RiSteering2Fill color={Colors.gray}/>
                    <p className="text-gray-700">{func}</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdPeopleAlt color={Colors.gray}/>
                    <p className="text-gray-700">{place} people</p>
                </div>

            </div>
            <div  className="flex justify-center items-center gap-10 mt-5">
                <h1 className="font-bold text-lg">{price}DT/<span className="font-mono text-gray-700">day</span></h1>
                <Button title="Rent" />
            </div>
       </div>
    </div>
  )
}

export default CardCar