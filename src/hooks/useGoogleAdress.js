import { useState, useEffect } from "react";
import axios from "axios";

const UseGoogleAddRess = (address) => {
  const [map, setMap] = useState(null);
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&
  key=AIzaSyB4A72mW00FamgjcTk0ovqQcdx88dISeq4`;

  useEffect(async () => {
    const response = await axios(API);
    console.log(response);
    setMap(response.data.results.geometry.location);
  }, []);

  return map;
};

export default UseGoogleAddRess;
