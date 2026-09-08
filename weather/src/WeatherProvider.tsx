import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      icon: string;
    };
  };
};

type WeatherContextType = {
  weatherData: WeatherData | null;
  setCity: (city: string) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const key = "e5d83df01a684a6794062620252606";

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("London");

  useEffect(() => {
    const fetchWeatherApi = async () => {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`,
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }

        console.log(data);
        setWeatherData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeatherApi();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ weatherData, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
