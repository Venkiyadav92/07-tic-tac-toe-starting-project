import { useState } from "react";


export default function Player({player,symbol, isActive, onChangeName}){
  const [playerName, setPlayerName] = useState(player);
  const [ isEditing , setIsEditing] = useState(false);
 function handleClick(event){
      setPlayerName(event.target.value)
 }


  function handleEditClick(){
    setIsEditing((editing) => !editing)
    if(isEditing){
      onChangeName(symbol, playerName);
    }

  }


  let editablePlayer=<span className="player-name">{playerName}</span>;
  if(isEditing){
    editablePlayer=<input type="text" required value={playerName} onChange={handleClick} />
  }
    return (
        <li className={isActive ? "active" : undefined }>
          <span className="player">
            {editablePlayer}
          
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}