import React, { useState } from "react";
import BotList from "./BotList";

function BotCollection({ bots, addBot, deleteBot, handleListClick }) {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={toggle} className="button-89">
        Display Bots
      </button>
      <ul className={`bot-list ${isVisible ? "visible" : "hidden"}`}>
        {bots.map((bot) => (
          <BotList
            key={bot.id}
            bot={bot}
            addBot={addBot}
            deleteBot={deleteBot}
            handleListClick={handleListClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;