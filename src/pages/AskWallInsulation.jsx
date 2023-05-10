import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskwallInsulation = () => {
  const isMobile = useCheckMobileScreen();
  const [wallInsulation, setwallInsulation] = React.useState('');
  // const [wallInsulation, setwallInsulation] = React.useState(
  //   localStorage.getItem("wallInsulation")
  // );

  const handleSelect = (number) => {
    setwallInsulation(number);
    localStorage.setItem('wallInsulation', number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    if (wallInsulation) {
      return navigate('/wallArea');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallInsulation]);

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
                De quelle façon souhaitez vous faire isoler vos murs ?
              </h1>

              <div className="flex gap-14 py-6">
                <HeatEnergyItem
                  icon={'./assets/wall1.png'}
                  text={'Intérieurs'}
                  number={'1'}
                  selected={wallInsulation === '1'}
                  setSelected={() => handleSelect('1')}
                />
                <HeatEnergyItem
                  icon={'./assets/wall2.png'}
                  text={'Extérieur'}
                  number={'2'}
                  selected={wallInsulation === '2'}
                  setSelected={() => handleSelect('2')}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskwallInsulation;
