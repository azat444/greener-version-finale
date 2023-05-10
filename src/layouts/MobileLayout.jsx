import React from 'react';
import Navbar from '../components/Navbar';
import MobileContinueButton from '../components/MobileContinueButton';

const MobileLayout = ({
  children,
  disabled,
  progress = '50%',
  question = 'Question Missing',
  onSubmit,
  house,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col min-h-[93vh]">
      <Navbar />

      <section className="flex flex-col items-center py-3">
        <div className="w-[90%] mx-auto flex items-center justify-start h-3 bg-[#FCFFFE] rounded-full">
          <div
            className="h-2 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
            style={{ width: progress }}
          ></div>
        </div>

        <h1 className="font-semibold text-lg text-center text-[#1E1D4C] mt-6 px-10">
          {question}
        </h1>
      </section>

      <section className="flex-1 flex flex-col gap-5 mx-6 mt-6">
        {children}
      </section>

      {house ? (
        <img
          src="./assets/mobile/3dhouse.png"
          alt="House"
          className="h-[250px] w-[250px] mx-auto mt-6"
        />
      ) : null}

      <div className="mx-8 my-3 mb-4">
        <MobileContinueButton disabled={disabled} />
      </div>
    </form>
  );
};

export default MobileLayout;
