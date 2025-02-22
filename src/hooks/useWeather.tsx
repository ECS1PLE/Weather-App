import { useState, useEffect } from "react";

const BASE_URL = "https://wttr.in";

interface WeatherCondition {
  description: string;
  icon: string;
}

const weatherConditions: WeatherCondition[] = [
  { description: "ясно", icon: "☀️" },
  { description: "облачно", icon: "☁️" },
  { description: "пасмурно", icon: "☁️" },
  { description: "туман", icon: "🌫️" },
  { description: "морось", icon: "🌦️" },
  { description: "дождь", icon: "🌧️" },
  { description: "ураган", icon: "⛈️" },
  { description: "снег", icon: "❄️" },
];

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<{
    city: string;
    temperature: string;
    description: string;
    icon: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASE_URL}/${city}?format=%C+%t`);
        if (!response.ok) {
          throw new Error("Город не найден");
        }
        const data = await response.text();

        console.log("Weather API Response:", data);

        const parts = data.split(" ");
        const description = parts.slice(0, -1).join(" ").trim().toLowerCase();
        const temperature = parts[parts.length - 1]?.trim() || "N/A";

        console.log("Processed description:", description);

        const matchedCondition = weatherConditions.find((w) =>
          description.includes(w.description)
        );
        const icon = matchedCondition ? matchedCondition.icon : "⛅";

        setWeather({
          city,
          temperature,
          description,
          icon,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};
