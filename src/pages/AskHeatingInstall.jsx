import React from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';
import HeatEnergyItem from '../components/HeatEnergyItem';
import ContinueButton from '../components/ContinueButton';

const AskHeatingInstall = () => {
  const [heatingInstall, setHeatingInstall] = React.useState({
    1: false,
    2: false,
  });
  const navigate = useNavigate();

  const setSelected = (number) => {
    setHeatingInstall((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  React.useEffect(() => {
    localStorage.setItem('heatingInstall', JSON.stringify(heatingInstall));
  }, [heatingInstall]);

  const handleNext = (e) => {
    e.preventDefault();
    const goals = JSON.parse(localStorage.getItem('goals'));
    if (goals.goal3) return navigate('/solar');
    navigate('/accomodationaffected');
    console.log('heatingInstall', heatingInstall);
  };

  return (
    <div className="flex flex-col h-screen ">
      <Navbar one two three />
      <div className="flex h-full">
        {/* LEFT */}
        <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
          <img src="/assets/home3d.png" alt="" />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
          <Link to="/goals" className="flex items-center gap-3">
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </Link>
          <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
            <div
              className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
              style={{ width: '50%' }}
            ></div>
          </div>

          <form
            onSubmit={handleNext}
            className="flex-1 flex flex-col items-center gap-12"
          >
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quel équipement de chauffage souhaitez-vous installer ?
            </h1>

            <div className="flex gap-14 py-6">
              {/* TODO  */}
              <HeatEnergyItem
                icon="/assets/fan.png"
                text="Pompe à chaleur"
                number={'1'}
                selected={heatingInstall['1']}
                setSelected={setSelected}
              />
              <HeatEnergyItem
                icon="/assets/fire.png"
                text="Poêle à granulés "
                number={'2'}
                selected={heatingInstall['2']}
                setSelected={setSelected}
              />
            </div>

            <div
              className={`border ${
                heatingInstall[1] === false && heatingInstall[2] === false
                  ? 'border-[#C8CCD8]'
                  : 'border-[#18808A] hover:shadow-lg'
              } rounded-[40px] p-1 bg-[#FCFFFE] transition-all`}
            >
              <button
                type="submit"
                disabled={
                  heatingInstall[1] === false && heatingInstall[2] === false
                }
                className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
              >
                CONTINUER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskHeatingInstall;
