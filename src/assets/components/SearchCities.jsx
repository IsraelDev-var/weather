import { useState } from "react";

const SearchCities = ({}) => {
const [cities, setCities] = useState([])


    const handleSubmit = (e) => {
      e.preventDefault();
      const cityName = e.target.cityName.value;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      axios
        .get(url)
        .then(({ data }) => setCities(data))
        .catch((err) => console.log(err));
    };


return (
    <section className=" pr-2 pl-2">
    <form
        onSubmit={handleSubmit} 
        className="flex rounded-md overflow-hidden   mx-auto"
    >
        <input
        id="city"
        placeholder="search cities"
        className="text-black p-2 w-[140px] md:w-[500px] mb-4  "
        type="text"
        />
        <button className="bg-neutral-800 px-2 mb-4">Search</button>

    </form>
    </section>
)
}
export default SearchCities