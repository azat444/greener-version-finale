import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';

const AskAccomodationAffectee = () => {
  const isMobile = useCheckMobileScreen();
  const [accomodationAffectee, setAccomodationAffectee] = React.useState('');
  // const [accomodationAffectee, setAccomodationAffectee] = React.useState(
  //   localStorage.getItem("accomodationAffectee")
  // );

  const setSelected = (number) => {
    setAccomodationAffectee(number);
    localStorage.setItem('accomodationAffectee', number);
  };

  let navigate = useNavigate();
  React.useEffect(() => {
    if (accomodationAffectee) {
      navigate('/people');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accomodationAffectee]);

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three four />
        <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
          <Link to="/accomodationAffected" className="flex items-center gap-3">
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </Link>
          <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
            <div
              className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
              style={{ width: '64%' }}
            ></div>
          </div>

          <section className="flex-1 flex flex-col items-center">
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-12">
              Dans ce logement, vous êtes:
            </h1>

            <div className="flex gap-6 py-12">
              <HeatEnergyItem
                icon={'./assets/affectee1.png'}
                text={'Propriétéaire occupant'}
                number={'1'}
                selected={accomodationAffectee === '1'}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/affectee2.png'}
                text={'Propriétaire d’une résidence secondaire'}
                number={'2'}
                selected={accomodationAffectee === '2'}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/affectee3.png'}
                text={'Propriétaire bailleur'}
                number={'3'}
                selected={accomodationAffectee === '3'}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={'./assets/affectee4.png'}
                text={'Locataire'}
                number={'4'}
                selected={accomodationAffectee === '4'}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-16 h-24'}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AskAccomodationAffectee;
