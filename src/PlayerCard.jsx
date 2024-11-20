// components/playercard.jsx
import React from 'react';

const PlayerCard = ({ team, name, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-lg">
      <img src={image} className="w-full h-56 object-cover" alt={`${name} image`} />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">Team: {team}</p>
      <p className="text-gray-500">Nationality: {nationality}</p>
      <p className="text-gray-500">Jersey Number: {jerseyNumber}</p>
      <p className="text-gray-500">Age: {age}</p>
    </div>
  );
};

PlayerCard.defaultProps = {
  name: "Unknown Player",
  nationality: "Unknown",
  team: "Unknown Team",
  jerseyNumber: "N/A",
  age: "Unknown Age",
  image: ""
};

export default PlayerCard;
