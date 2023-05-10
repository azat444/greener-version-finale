import React from 'react';
import NumberInput from '../components/NumberInput';
import { generateURLstring } from '../util/generateURLstring';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';

const AskatticArea = () => {
  const isMobile = useCheckMobileScreen();
  const [atticArea, setatticArea] = React.useState('');

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setatticArea(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (atticArea !== '') {
      localStorage.setItem('atticArea', atticArea);
      const url = generateURLstring();

      if (!url) {
        const goals = JSON.parse(localStorage.getItem('goals'));
        console.log('goals', goals);
        if (goals.goal2 === true) {
          navigate('/heatinstall');
        } else if (goals.goal3 === true) {
          navigate('/solar');
        } else {
          navigate('/accomodationaffected');
        }
      } else {
        navigate(url);
      }
    }
  };

  const IDKHandler = () => {
    setatticArea(0);
    localStorage.setItem('atticArea', 'NILL');
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
              to={'/atticinsulation' + window.location.search}
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

            <section className="flex-1 flex flex-col items-center gap-12 py-16">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quelle est la surface des combles à isoler
              </h1>

              <div className="flex gap-14 py-6 w-full">
                <NumberInput
                  isMobile={isMobile}
                  state={atticArea}
                  changeHandler={changeHandler}
                  onSubmit={onSubmit}
                  IDKHandler={IDKHandler}
                  label={'Surface en m2'}
                  placeholder="Exemple: 60 m2"
                  unit="m2"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskatticArea;
