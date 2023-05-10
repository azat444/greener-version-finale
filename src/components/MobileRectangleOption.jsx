import React from 'react';

const MobileRectangleOption = ({ img, text, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`h-[60px] bg-[#FCFFFE] border flex items-center rounded-lg transition-all ${
        selected ? 'border-[#18808A] shadow-md' : 'border-[#C8CCD8]'
      }`}
    >
      <img src={img} alt="icon" className="px-4" />
      <p
        className={`font-semibold ${
          selected ? 'text-[#18808A]' : 'text-[#999BA3]'
        } `}
      >
        {text}
      </p>
    </div>
  );
};

export default MobileRectangleOption;
