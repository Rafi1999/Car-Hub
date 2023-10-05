import { useEffect, useState } from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import CarCard from "./CarCard";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("../../cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <Search />
      <div className="grid grid-cols-3 gap-2 items-center justify-center self-center">
        {cars.map((each) => (
          <CarCard key={each.id} car={each} />
        ))}
      </div>
    </div>
  );
};

export default Home;
