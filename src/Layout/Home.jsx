import  { useEffect, useState } from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import CarCard from "./CarCard";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const carsPerPage = 6;

  useEffect(() => {
    fetch("../../cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the index range for the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // Filter cars based on the search query
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div>
      <Navbar />
      <Search onChange={handleSearchInputChange} value={searchQuery} />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-items-center gap-5 my-14">
        {currentCars.map((each) => (
          <CarCard key={each.id} car={each} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredCars.length / carsPerPage) }).map(
          (page, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 mb-8 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
