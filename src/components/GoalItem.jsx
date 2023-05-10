import React from 'react';
import { InfoIcon, Tooltip } from './HeatEnergyItem';

const GoalItem = ({
  icon,
  heading,
  text,
  selected,
  setGoal,
  number,
  isMobile,
}) => {
  return (
    <div
      className={`flex relative gap-8 items-center justify-center border-[#c8ccd8] bg-[#FCFFFE] rounded-[20px] h-32 w-[40rem] cursor-pointer border-[1.5px] py-7 px-7 hover:border-[#18808A] hover:shadow-lg transition-all ${
        selected && 'selected'
      }`}
      onClick={() => {
        setGoal(number);
      }}
    >
      <div className="absolute top-3 right-4">
        <Tooltip>
          <InfoIcon />
        </Tooltip>
      </div>
      <div className={`flex w-full`}>
        <div className="flex items-center justify-center">
          <img className={isMobile ? 'w-9 h-10' : ''} src={icon} alt="Goal1" />
        </div>
        <div className="flex-1 flex justify-center flex-col ">
          <p className="text-[#1E1D4C] font-semibold text-2xl">{heading}</p>
          <p className="text-[#1E1D4C] font-medium text-2xl">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default GoalItem;
