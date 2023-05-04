import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskElectricEquipment = () => {
  const isMobile = useCheckMobileScreen();
  const [electricEquipment, setElectricEquipment] = React.useState('');
  // const [electricEquipment, setElectricEquipment] = React.useState(
  //   localStorage.getItem("electricEquipment")
  // );

  const setSelected = (number) => {
    setElectricEquipment(number);
    localStorage.setItem('electricEquipment', number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    if (electricEquipment) {
      navigate('/electricbillshare' + window.location.search);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [electricEquipment]);

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
              Quel type d'équipement électrique est installé ?
            </h1>

            {/* Make a grid of 6 elements in 2 rows */}
            <div className="grid grid-cols-2 gap-6">
              <HeatEnergyItem
                icon={'./assets/electric1.png'}
                text={'Chaudière électrique'}
                number={'1'}
                selected={electricEquipment === '1'}
                setSelected={setSelected}
                isMobile={isMobile}
                mobileSize={'h-36 w-40'}
                // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/electric2.png'}
                text={'Plafond chauffants'}
                number={'2'}
                selected={electricEquipment === '2'}
                setSelected={setSelected}
                isMobile={isMobile}
                mobileSize={'h-36 w-40'}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/electric3.png'}
                text={'Plancher chauffant'}
                number={'3'}
                selected={electricEquipment === '3'}
                setSelected={setSelected}
                isMobile={isMobile}
                mobileSize={'h-36 w-40'}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/electric4.png'}
                text={'Radiateur électrique'}
                number={'3'}
                selected={electricEquipment === '3'}
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

export default AskElectricEquipment;
