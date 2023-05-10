import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';

const AskWorkStart = () => {
  const [workStartTime, setworkStartTime] = React.useState('');

  let navigate = useNavigate();

  React.useEffect(() => {
    if (workStartTime) {
      return navigate('/endscreen');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workStartTime]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar one two three four />
        <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
          <Link to="/appointment" className="flex items-center gap-3">
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </Link>

          <section className="flex-1 flex flex-col items-center py-6">
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-12">
              Quand souhaitez-vous démarrer vos travaux?
            </h1>
            <div className="flex xl:gap-28 gap-6 items-center justify-center ">
              <div
                className="py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all"
                onClick={() => {
                  setworkStartTime('1');
                  localStorage.setItem('workStartTime', '1');
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center  ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Le plus tôt possible
                </p>
              </div>
              <div
                className="py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all"
                onClick={() => {
                  setworkStartTime('2');
                  localStorage.setItem('workStartTime', '2');
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center  ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Avant l’hiver
                </p>
              </div>

              <div
                className="py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all"
                onClick={() => {
                  setworkStartTime('3');
                  localStorage.setItem('workStartTime', '3');
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Avant l’été
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AskWorkStart;
