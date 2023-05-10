import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SelectComp from '../components/SelectComp';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';

const AskRoofOrientation = () => {
  const isMobile = useCheckMobileScreen();
  const [roofOrientation, setRoofOrientation] = React.useState('');
  // const [roofOrientation, setRoofOrientation] = React.useState(
  //   localStorage.getItem("roofOrientation")
  // );

  const setSelected = (number) => {
    setRoofOrientation(number);
    localStorage.setItem('roofOrientation', number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (roofOrientation !== '') {
      navigate('/roofarea');
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
            <Link to={'/solar'} className="flex items-center gap-3">
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
                Quelle est l'orientation du pan de toiture où vous souhaitez
                installer vos panneaux photovoltaïques ?
              </h1>

              <div className="grid grid-cols-2 gap-6 py-6  w-3/4">
                <SelectComp
                  selected={roofOrientation === '1'}
                  setSelected={() => setSelected('1')}
                  text="Est"
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={roofOrientation === '2'}
                  setSelected={() => setSelected('2')}
                  text={'Sud-Est'}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={roofOrientation === '3'}
                  setSelected={() => setSelected('3')}
                  text="Sud"
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={roofOrientation === '6'}
                  setSelected={() => setSelected('6')}
                  text={'Sud-Ouest'}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={roofOrientation === '8'}
                  setSelected={() => setSelected('8')}
                  text={'Ouest'}
                  isMobile={isMobile}
                  expand
                />
              </div>
              <div
                className={`border ${
                  roofOrientation === ''
                    ? 'border-[#C8CCD8]'
                    : 'border-[#18808A]'
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={roofOrientation === ''}
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

export default AskRoofOrientation;
