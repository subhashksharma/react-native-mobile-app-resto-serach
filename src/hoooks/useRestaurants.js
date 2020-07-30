import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      console.log(` finding restaurant for ${term}`);

      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });

      setRestaurants(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong while searching restaurants");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
