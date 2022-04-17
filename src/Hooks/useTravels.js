import React, { useEffect, useState } from "react";

const useTravels = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("/travel.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return [places, setPlaces];
};

export default useTravels;
