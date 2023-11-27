import { useParams } from "react-router-dom"
import { CarDatas, datas } from "../utilities/CarDatas"
import Button from "../components/Button"

function Details() {
 const {id} = useParams<{ id: string} >()
 const itemId = Number(id)
 
 const item: datas|undefined = CarDatas.find(i=>i.id === itemId)
 
 if(!item){
  return <h1>Not found</h1>
 }

  return (
    <div className="bg-gray-100 pb-10 pt-32">
      <div className="grid grid-cols-2 ">
        <div className="flex justify-center rounded-lg bg-white mx-10">
          <img src={item.img} width={500}  />
        </div>
        <div className="bg-white mx-10 pl-10 pt-10 rounded-lg">
          <h1 className="font-bold text-4xl">{item.title}</h1>
        <div >
          <div className=" mt-10 flex gap-24 items-center">
          <div className="">
            <p className="text-xl text-gray-700 font-semibold">Type Car  <span className="font-bold text-black">{item.type}</span> </p>
          <p className="text-xl mt-2 text-gray-700 font-semibold">Steering   <span className="font-bold text-black">{item.func}</span> </p>
          </div>
          <div className="">
            <p className="text-xl text-gray-700 font-semibold">Capacity  <span className="font-bold text-black">{item.place} person</span> </p>
          <p className="text-xl mt-2 text-gray-700 font-semibold">Gasoline   <span className="font-bold text-black">{item.litre}L</span> </p>
            <p>  </p>
          </div>
          </div>

          <div className="flex justify-between items-center mt-10 ">
            <div className="">
              <h1><span className="font-bold text-2xl ">{item.price}DT</span>/days</h1>
            </div>
            <div className="mx-8">
              <Button title={"Rent"} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Details