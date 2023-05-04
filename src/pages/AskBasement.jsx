import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskBasement = () => {
  const isMobile = useCheckMobileScreen();

  const [basement, setBasement] = React.useState('');

  const setSelected = (number) => {
    setBasement(number);
    localStorage.setItem('floorInsulation', number);
  };
  let navigate = useNavigate();

  React.useEffect(() => {
    if (basement) {
      const search = window.location.search;

      if (basement === '1') {
        navigate('/askBasement1' + search);
        return;
      }
      if (basement === '2') {
        navigate('/askBasement2' + search);
        return;
      }
      if (basement === '3') {
        navigate('/askBasement3' + search);
        return;
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basement]);

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
            <Link to={'/isolate'} className="flex items-center gap-3">
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
              <div>
                <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                  L’isolation du sol concerne?
                </h1>
                <p className="font-normal text-xl text-[#1E1D4C] py-2">
                  Sélectioner jusqu’a N élément
                </p>
              </div>

              <div className="flex gap-14 py-6">
                {/* TODO  */}
                <HeatEnergyItem
                  icon={'./assets/basement1.png'}
                  text={'Garage'}
                  number={'1'}
                  selected={basement.basement1}
                  setSelected={setSelected}
                  isMobile={isMobile}
                />
                <HeatEnergyItem
                  icon={'./assets/basement2.png'}
                  text={'Vide sanitaire'}
                  number={'2'}
                  selected={basement.basement2}
                  setSelected={setSelected}
                  isMobile={isMobile}
                />
                <HeatEnergyItem
                  icon={'./assets/basement3.png'}
                  text={'Cave'}
                  number={'3'}
                  selected={basement.basement3}
                  setSelected={setSelected}
                  isMobile={isMobile}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskBasement;
