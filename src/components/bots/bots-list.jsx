import React from 'react';
import {useValuesStore} from "../../store/values-store";
import BotCard from "./bot-card";

const BotsList = () => {

  const bots = useValuesStore((state) => state.data.bots);


  return (
    <ul className="bots-list">
      {bots !== undefined && bots.length > 0 ? bots.map((bot) => {
        return (
          <li className="bots-list__items" key={bot.name}>
            <BotCard bot={bot} />
          </li>
        )
      }) : 'Ботов нет'}
    </ul>
  );
};

export default BotsList;
