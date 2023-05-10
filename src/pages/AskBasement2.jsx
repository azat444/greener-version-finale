import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import NumberInput from '../components/NumberInput';
import DoubleNumberInput from '../components/DoubleNumberInput';
import { generateURLstring } from '../util/generateURLstring';

const AskBasement2 = () => {
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  const [area, setArea] = React.useState('');
  const [celingHeight, setCeilingHeight] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (area !== '' && celingHeight !== '') {
      localStorage.setItem('crawlSpaceArea', area);
      localStorage.setItem('ceilingHeight', celingHeight);
      const url = generateURLstring();
      if (!url) {
        const goals = JSON.parse(localStorage.getItem('goals'));
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

  const IDKHandler1 = () => {
    setArea(0);
    localStorage.setItem('crawlSpaceArea', 'NILL');
  };

  const IDKHandler2 = () => {
    setCeilingHeight('NILL');
    localStorage.setItem('ceilingHeight', 'NILL');
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
              to={'/basement' + window.location.search}
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

            <section className="flex-1 flex flex-col items-center gap-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quelle est la surface du Vide sanitaire à isoler?
              </h1>

              <div className="flex gap-14 py-6 w-full">
                <DoubleNumberInput
                  isMobile={isMobile}
                  state1={area}
                  type1="number"
                  type2="string"
                  state2={celingHeight}
                  changeHandler1={(e) => setArea(e.target.value)}
                  changeHandler2={(e) => setCeilingHeight(e.target.value)}
                  onSubmit={onSubmit}
                  IDKHandler1={IDKHandler1}
                  IDKHandler2={IDKHandler2}
                  nextNav="/electricbill"
                  label1={'Surface en m2'}
                  label2={'Hauteur sous plafond'}
                  placeholder1="Exemple: 60 m2"
                  placeholder2="Exemple: 1m80"
                  unit1="m2"
                  unit2=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskBasement2;
