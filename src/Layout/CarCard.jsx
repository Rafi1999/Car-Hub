import { BsFillPeopleFill,BsHeart} from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { MdOutlineAvTimer } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
const CarCard = ({car}) => {
   const {name,price,picture,manufacture_year,seat_capacity,mileage,transmission,fuel_type} = car;
   return (
      <div className="card w-[400px] bg-slate-200 shadow-md">
  <figure className="px-4 pt-8">
    <img src={picture} alt="Car" className="rounded-xl h-[270px] object-cover w-screen" />
  </figure>
  <div className="card-body">
    <div className="flex justify-between items-center">
    <h2 className="card-title">{name}</h2>
    <h2 className="border-2 border-gray-400 rounded-lg p-1">{manufacture_year}</h2>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
      <BsFillPeopleFill className="text-cyan-600"></BsFillPeopleFill>
      <p className="text-gray-600">{seat_capacity}</p>
      </div>
      <div className="flex items-center gap-2">
      <FaGasPump className="text-cyan-600"></FaGasPump>
      <p className="text-gray-600">{fuel_type}</p>
      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
      <MdOutlineAvTimer className="text-cyan-600"></MdOutlineAvTimer>
      {fuel_type!= 'Electric'? <p className="text-gray-600">{mileage} Km/1-litre</p>: <p className="text-gray-600">{mileage} Km/1-charge</p>}
      </div>
      <div className="flex items-center gap-2">
      <GiSteeringWheel className="text-cyan-600"></GiSteeringWheel>
      <p className="text-gray-600">{transmission}</p>
      </div>
    </div>
        <div className="flex justify-between border-t-2 border-t-gray-300 mt-3 items-center">
          <p className="mt-3 text-2xl font-semibold">${price}</p>
          <div className="flex items-center self-center gap-2 mt-3">
          <button><BsHeart className="text-cyan-600"></BsHeart></button>
          <button className="btn-info rounded-2xl btn-sm font-medium">Buy</button>
          </div>
    </div>
  </div>
</div>
   );
};

export default CarCard;