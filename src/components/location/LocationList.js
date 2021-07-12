import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {locations.map((location) => {
        return <LocationCard key={location.id} location={location} />;
      })}
    </div>
  );
};
