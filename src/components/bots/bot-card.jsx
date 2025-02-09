import React, {useEffect, useState} from 'react';
import SVG from "react-inlinesvg";
import {useValuesStore} from "../../store/values-store";

const BotCard = (props) => {

  const currentPeriod = useValuesStore((state) => state.period);

  const {bot} = props;

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(bot)

    if (bot.name.includes('yellow')) {
      setName('Megabot')
    }
    if (bot.name.includes('red')) {
      setName('Attack')
    }
    if (bot.name.includes('orange')) {
      setName('Attack')
    }
    if (bot.name.includes('blue')) {
      setName('Balance')
    }
    if (bot.name.includes('green')) {
      setName('Defence')
    }
    if (bot.name.includes('white')) {
      setName('Wdude')
    }



  }, [bot]);

  return (
    <div className="bot-card">
      <div className="bot-card__body">
        <div className="bot-card__image">
          <SVG src={`/images/bots/${bot.name}.svg`} title={name} />
        </div>
        <div className="bot-card__name">
          {name}
        </div>
        <div className="bot-card__value">
          {value}
        </div>
      </div>
    </div>
  );
};

export default BotCard;
