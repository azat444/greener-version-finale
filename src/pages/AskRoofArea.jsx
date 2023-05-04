import React from 'react';
import NumberInput from '../components/NumberInput';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';

const AskRoofArea = () => {
  const isMobile = useCheckMobileScreen();
  const [roofArea, setRoofArea] = React.useState('');

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setRoofArea(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (roofArea !== '') {
      localStorage.setItem('roofArea', roofArea);
      navigate('/slopechoice2');
    }
  };

  const IDKHandler = () => {
    setRoofArea(0);
    localStorage.setItem('roofArea', 'NILL');
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
            <Link
              to={'/rooforientation' + window.location.search}
              className="flex items-center gap-3"
            >
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '50%' }}
              ></div>
            </div>

            <section className="flex-1 flex flex-col items-center gap-12 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quelle est la surface du pan de toiture où poser les panneaux ?{' '}
              </h1>

              <div className="flex gap-14 py-6 w-full">
                <NumberInput
                  isMobile={isMobile}
                  state={roofArea}
                  changeHandler={changeHandler}
                  onSubmit={onSubmit}
                  IDKHandler={IDKHandler}
                  label={'Surface en m2'}
                  placeholder="Exemple: 60 m2"
                  unit="m2"
                  style="py-2"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskRoofArea;
