import { useState } from "react";
import { useWeather } from "./WeatherProvider";

function App() {
  const { weatherData, setCity } = useWeather();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      setCity(search.trim());
      setSearch("");
    }
  };

  if (!weatherData) {
    return <h1>Loading...</h1>;
  }
  const city = weatherData.location.name;
  const region = weatherData.location.region;
  const country = weatherData.location.country;
  const icon = weatherData.current.condition.icon;
  const temp_c = weatherData.current.temp_c;
  const temp_f = weatherData.current.temp_f;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#e0e5ec] px-4">
      <div className="flex items-center gap-3 bg-[#e0e5ec] rounded-full p-2 shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff]">
        <input
          type="text"
          placeholder="Search city..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="bg-transparent outline-none text-sm text-[#3d4a66] placeholder:text-[#98a4bd] px-4 py-2 w-44"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="font-['Baloo_2'] font-semibold text-sm text-[#4a5a8a] bg-[#e8ecf3] px-5 py-2.5 rounded-full shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] transition-shadow"
        >
          Search
        </button>
      </div>

      <article className="bg-[#e8ecf3] rounded-[40px] px-14 py-12 w-80 text-center shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]">
        <h1 className="font-['Baloo_2'] font-bold text-3xl text-[#3d4a66] mb-1">
          {city}
        </h1>
        <span className="block text-sm text-[#7686a3] mb-0.5">{region}</span>
        <p className="text-xs text-[#98a4bd] mb-5">{country}</p>
        <img
          src={icon}
          alt="icon"
          className="w-28 h-28 p-4 mx-auto my-2 rounded-full bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff]"
        />
        <section className="w-full flex justify-between items-center mt-5">
          <p className="inline-block font-['Baloo_2'] font-semibold text-lg text-[#4a5a8a] bg-[#e0e5ec] px-5 py-2.5 m-1.5 rounded-2xl shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
            {`${temp_c} ℃`}
          </p>
          <p className="inline-block font-['Baloo_2'] font-semibold text-lg text-[#4a5a8a] bg-[#e0e5ec] px-5 py-2.5 m-1.5 rounded-2xl shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
            {`${temp_f} ℉`}
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
