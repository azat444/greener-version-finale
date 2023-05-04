import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SelectComp from '../components/SelectComp';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';

const AskSlopeChoice = () => {
  const isMobile = useCheckMobileScreen();
  const [slopeChoice, setslopeChoice] = React.useState('');
  // const [slopeChoice, setslopeChoice] = React.useState(
  //   localStorage.getItem("slopeChoice")
  // );

  const setSelected = (number) => {
    setslopeChoice(number);
    localStorage.setItem('slopeChoice', number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (slopeChoice !== '') {
      navigate('/accomodationaffected');
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three />
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src="/assets/home3d.png" alt="" />
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
            <Link to={'/slopechoice2'} className="flex items-center gap-3">
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '50%' }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex-1 flex flex-col items-center gap-6 py-6"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C] text-center">
                Quelle est le revêtement de votre toiture?
              </h1>

              <div className="grid grid-cols-2 gap-6 py-6  w-3/4">
                <SelectComp
                  selected={slopeChoice === '1'}
                  setSelected={() => setSelected('1')}
                  text="Tuile mécanique"
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={slopeChoice === '2'}
                  setSelected={() => setSelected('2')}
                  text="Ardoise"
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={slopeChoice === '3'}
                  setSelected={() => setSelected('3')}
                  text={'Bac acier'}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={slopeChoice === '4'}
                  setSelected={() => setSelected('4')}
                  text={'Autre'}
                  isMobile={isMobile}
                />
              </div>
              <div
                className={`border ${
                  slopeChoice === '' ? 'border-[#C8CCD8]' : 'border-[#18808A]'
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={slopeChoice === ''}
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

export default AskSlopeChoice;
