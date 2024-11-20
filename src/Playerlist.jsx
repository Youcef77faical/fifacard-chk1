// components/playerlist.jsx
import './index.css';
import { player } from '../data/player';
import PlayerCard from './PlayerCard'; 
const PlayerList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {player.map((player, index) => (
        <PlayerCard
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  );
};

export default PlayerList;

 
