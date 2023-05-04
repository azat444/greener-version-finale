import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskHeatingEnergy = () => {
  const isMobile = useCheckMobileScreen();
  const [heatingEnergy, setHeatingEnergy] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  // const [heatingEnergy, setHeatingEnergy] = React.useState(
  //   localStorage.getItem("heatingEnergy")
  // );

  const setSelected = (number) => {
    setHeatingEnergy((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  React.useEffect(() => {
    localStorage.setItem('heatingEnergy', JSON.stringify(heatingEnergy));
  }, [heatingEnergy]);

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // generate URL string based on user selection
    let url = '';
    if (heatingEnergy['1'] === true) {
      if (url) url += '?oilequipment';
      else url += '/oilequipment';
    }
    if (heatingEnergy['2'] === true) {
      if (url) url += '?electricequipment';
      else url += '/electricequipment';
    }
    if (heatingEnergy['3'] === true) {
      if (url) url += '?gasequipment';
      else url += '/gasequipment';
    }
    if (heatingEnergy['4'] === true) {
      if (url) url += '?woodbill';
      else url += '/woodbill';
    }
    if (heatingEnergy['6'] === true) {
      if (url) url += '?coalbill';
      else url += '/coalbill';
    }
    if (heatingEnergy['5'] === true) {
      if (url) url += '';
      else url += '/goals';
    }

    navigate(url);
  };

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two />
        <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
          <Link to="/electricbill" className="flex items-center gap-3">
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </Link>
          <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
            <div
              className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
              style={{ width: '20%' }}
            ></div>
          </div>

          <form
            onSubmit={submitHandler}
            className="flex-1 flex flex-col items-center justify-evenly gap-4"
          >
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quelle est l’énergie de chauffage actuelle de votre logement ?
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <HeatEnergyItem
                icon={'./assets/oil.png'}
                text={'Chauffage au Fioul'}
                number={'1'}
                selected={heatingEnergy['1']}
                setSelected={setSelected}
                // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/electric.png'}
                text={'Chauffage Éléctrique'}
                number={'2'}
                selected={heatingEnergy['2']}
                setSelected={setSelected}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/gas.png'}
                text={'Chauffage au Gaz'}
                number={'3'}
                selected={heatingEnergy['3']}
                setSelected={setSelected}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/heat.png'}
                text={'Chauffage au Bois'}
                number={'4'}
                selected={heatingEnergy['4']}
                setSelected={setSelected}
                // size={isMobile ? 'w-20 h-14' : 'w-16 h-24'}
              />
              <HeatEnergyItem
                icon={'./assets/fan.png'}
                text={'Pompe à chaleur'}
                number={'5'}
                selected={heatingEnergy['5']}
                setSelected={setSelected}
                // size={isMobile ? 'w-20 h-14' : 'w-28 h-28'}
              />
              <HeatEnergyItem
                icon={'./assets/carbon.png'}
                text={'Chauffage au Charbon'}
                number={'6'}
                selected={heatingEnergy['6']}
                setSelected={setSelected}
                // size={isMobile ? 'w-20 h-14' : 'w-28 h-20'}
              />
            </div>

            <div
              className={`border ${
                heatingEnergy === '' ||
                (heatingEnergy['1'] === false &&
                  heatingEnergy['2'] === false &&
                  heatingEnergy['3'] === false &&
                  heatingEnergy['4'] === false &&
                  heatingEnergy['5'] === false &&
                  heatingEnergy['6'] === false)
                  ? 'border-[#C8CCD8]'
                  : 'border-[#18808A] hover:shadow-lg'
              } rounded-[40px] p-1 bg-[#FCFFFE] transition-all`}
            >
              <button
                type="submit"
                disabled={
                  heatingEnergy === '' ||
                  (heatingEnergy['1'] === false &&
                    heatingEnergy['2'] === false &&
                    heatingEnergy['3'] === false &&
                    heatingEnergy['4'] === false &&
                    heatingEnergy['5'] === false &&
                    heatingEnergy['6'] === false)
                }
                className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
              >
                CONTINUER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AskHeatingEnergy;
