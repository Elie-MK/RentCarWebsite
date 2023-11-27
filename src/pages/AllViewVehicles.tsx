import SearchBar from '../components/SearchBar'
import CardCar from '../components/CardCar'
import { CarDatas } from '../utilities/CarDatas';
import { Link } from 'react-router-dom';

function AllViewVehicles(){
  return (
    <div className='py-20'>
        <div className='-mt-72'>
            <img src='../../src/assets/images/rentbackground.jpg' className=''/>
        </div>
        <div className='-mt-11 flex  justify-center'>
            <div className='flex'>
                <SearchBar />
            </div>
        </div>

        <div className="md:flex gap-6 md:mt-6 justify-center">
                {CarDatas.map(
                  ({ title, type, img, litre, func, place, price, id  }) => (
                    <Link to={`/allvehicles/detail/${id}`}>
                        <CardCar title={title} type={type} img={img} litre={litre} func={func} place={place} price={price} />
                    </Link>
                  )
                )}
              </div>
    </div>
  )
}

export default AllViewVehicles