import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Countryflags({ countryName }: { countryName: string }) {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  if (countryName && countryName !== "United States") {
    useEffect(() => {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res) => {
          setCountryCode(res.data[0].cca2);
        });
    }, [countryName]);
  }

  if (countryName === "United States") {
    return (
      <img
        src={`https://flagsapi.com/US/flat/64.png`}
        alt={countryName}
        className="h-5 w-5"
      />
    );
  }

  if (countryCode) {
    return (
      <img
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        alt={countryName}
        className="h-5 w-5"
      />
    );
  }
  return <div>🌎</div>;
}
