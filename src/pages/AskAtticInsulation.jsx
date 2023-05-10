import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import { generateURLstring } from '../util/generateURLstring';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';

const AskAtticInsulation = () => {
  const isMobile = useCheckMobileScreen();
  // const [atticInsulation, setAtticInsulation] = React.useState(
  //   localStorage.getItem("atticInsulation")
  // );
  const [atticInsulation, setAtticInsulation] = React.useState('');

  const handleSelect = (number) => {
    setAtticInsulation(number);
    localStorage.setItem('atticInsulation', number);
  };
  const path = generateURLstring();
  const url = '/atticarea' + path.replace(path[0], '?');

  let navigate = useNavigate();

  React.useEffect(() => {
    if (atticInsulation) {
      return navigate(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atticInsulation]);

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

            <section className="flex-1 flex flex-col items-center gap-12 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                L’isolation des combles concerne :
              </h1>

              <div className="flex gap-14 py-6">
                <HeatEnergyItem
                  icon={'./assets/attic1.png'}
                  text={'Combles aménagés'}
                  number={'1'}
                  selected={atticInsulation === '1'}
                  setSelected={() => handleSelect('1')}
                  isMobile={isMobile}
                />
                <HeatEnergyItem
                  icon={'./assets/attic2.png'}
                  text={'Combles perdus'}
                  number={'2'}
                  selected={atticInsulation === '2'}
                  setSelected={() => handleSelect('2')}
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

export default AskAtticInsulation;
