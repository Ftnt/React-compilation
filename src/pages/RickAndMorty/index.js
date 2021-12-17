import React, { useEffect, useState } from "react";
import { get } from "axios";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const ApiRickAndMorty = () => {
  const [card, setCard] = useState();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const { data } = await get(
          "https://rickandmortyapi.com/api/character/"
        );
        setCard(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getCharacters();
  }, []);
  return (
    <div className=" max-w-screen-xl m-auto">
      <div className="flex flex-wrap gap-4 pt-10 items-center justify-center wrapper">
        {card ? (
          card.map(
            ({
              id,
              name,
              status,
              species,
              image,
              location: { name: locationName },
            }) => (
              <Card
                key={id}
                image={image}
                name={name}
                status={status}
                species={species}
                locationName={locationName}
              />
            )
          )
        ) : (
          <div className="bg-gray-900 w-screen h-screen">
            <Loading title="Procesando Informacion...!!" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiRickAndMorty;
