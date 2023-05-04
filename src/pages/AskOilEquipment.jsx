import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskOilEquipment = () => {
  const isMobile = useCheckMobileScreen();
  const [oilEquipment, setOilEquipment] = React.useState('');
  // const [oilEquipment, setOilEquipment] = React.useState(
  //   localStorage.getItem("oilEquipment")
  // );

  const setSelected = (number) => {
    setOilEquipment(number);
    localStorage.setItem('oilEquipment', number);
  };
  let navigate = useNavigate();

  React.useEffect(() => {
    if (oilEquipment) {
      navigate('/fuelbill' + window.location.search);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oilEquipment]);

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two />
        <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3"
          >
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </button>
          <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
            <div
              className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
              style={{ width: '20%' }}
            ></div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quel type d'équipement au fioul est installé ?
            </h1>

            {/* Make a grid of 6 elements in 2 rows */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6 w-">
              <HeatEnergyItem
                icon={'./assets/oil1.png'}
                text={'Chaudière à condensation '}
                number={'1'}
                selected={oilEquipment === '1'}
                setSelected={setSelected}
                isMobile={isMobile}
                mobileSize={'h-36 w-40'}
                // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/oil2.png'}
                text={'Chaudière classique'}
                number={'2'}
                selected={oilEquipment === '2'}
                setSelected={setSelected}
                isMobile={isMobile}
                mobileSize={'h-36 w-40'}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/oil3.png'}
                text={'Poêle'}
                number={'3'}
                selected={oilEquipment === '3'}
                setSelected={setSelected}
                isMobile={isMobile}
                mobileSize={'h-36 w-40'}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskOilEquipment;
