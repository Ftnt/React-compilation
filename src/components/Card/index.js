import React from "react";

const Card = ({ id, name, status, species, image, locationName }) => {
  return (
    <div className="w-96 h-48 bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="w-full px-4 py-8">
          <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold">
            {status} - {species}
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {name}
          </a>
          <div className="text-sm pt-4 text-gray-500">
            <span>Last known location:</span>
          </div>
          <div className="uppercase tracking-wide text-sm text-gray-900 font-semibold">
            {locationName}
          </div>
          <p className="mt-2 text-gray-500"></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
