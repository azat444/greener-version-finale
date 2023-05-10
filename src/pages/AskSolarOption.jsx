import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskSolarOption = () => {
  const isMobile = useCheckMobileScreen();
  const [solarOption, setsolarOption] = React.useState('');
  // const [solarOption, setsolarOption] = React.useState(
  //   localStorage.getItem("solarOption")
  // );

  const handleSelect = (number) => {
    setsolarOption(number);
    localStorage.setItem('solarOption', number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    if (solarOption) {
      navigate('/rooforientation');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solarOption]);

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
            <Link to={'/goals'} className="flex items-center gap-3">
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
                Quel équipement solaire souhaitez-vous installer ?
              </h1>

              <div className="flex gap-14 py-6">
                <HeatEnergyItem
                  icon={'./assets/solar1.png'}
                  text={'Panneaux solaires photovoltaïques'}
                  number={'1'}
                  selected={solarOption === '1'}
                  setSelected={() => handleSelect('1')}
                />
                <HeatEnergyItem
                  icon={'./assets/solar2.png'}
                  text={'Sytème solaire combiné'}
                  number={'2'}
                  selected={solarOption === '2'}
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

export default AskSolarOption;
