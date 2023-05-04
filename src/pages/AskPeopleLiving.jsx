import React from 'react';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import NumberInput from '../components/NumberInput';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';

const AskPeopleLiving = () => {
  const isMobile = useCheckMobileScreen();
  const [people, setPeople] = React.useState(0);

  const increment = () => {
    setPeople((prev) => prev + 1);
  };

  const decrement = () => {
    if (people === 0) return;
    setPeople((prev) => prev - 1);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('people', people);
    navigate('/incometax');
  };

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three four />
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src="/assets/home3d.png" alt="" />
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
            <Link
              to={'/accomodationAffectee' + window.location.search}
              className="flex items-center gap-3"
            >
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '71%' }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex-1 flex flex-col items-center justify-around gap-12 py-16"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Combien de personnes composent votre foyer,vous compris?
              </h1>

              <div className="w-[250px] h-[60px] bg-[#FCFFFE] border border-[#C8CCD8] rounded-2xl flex items-center justify-between text-[#1E1D4C] text-4xl">
                <button
                  type="button"
                  onClick={decrement}
                  className="h-full  w-[25%] hover:bg-gray-100 rounded-tl-2xl rounded-bl-2xl"
                >
                  -
                </button>
                <span className="border-l-2 border-r-2 font-extrabold flex-1 flex items-center justify-center h-full">
                  {people}
                </span>
                <button
                  type="button"
                  onClick={increment}
                  className="h-full  hover:bg-gray-100 rounded-tr-2xl rounded-br-2xl  w-[25%]"
                >
                  +
                </button>
              </div>
              <div
                className={`border ${
                  people === 0 ? 'border-[#C8CCD8]' : 'border-[#18808A]'
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={people === 0}
                  className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
                >
                  CONTINUER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskPeopleLiving;
