
const CarCard = ({car}) => {
   const {name,price,description,picture} = car;
   return (
      <div className="card w-96 h-96 bg-gray-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Car" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
   );
};

export default CarCard;