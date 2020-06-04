import React, { useEffect, useState } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import Manager from "../../modules/Manager";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    Manager.getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit us at the East Nashville Location
        <br />
        123 Not This St
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {spotlightId && <AnimalSpotlight animalId={spotlightId} />}
    </>
  );
};

export default Home;
