import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';
import 'react-calendar/dist/Calendar.css';
import ChooseTime from '../components/ChooseTime';

const TelephoneAppointment = () => {
  const [date, onDateChange] = useState(new Date());
  const [time, setTime] = React.useState(null);

  const navigate = useNavigate();

  const submitHandler = () => {
    localStorage.setItem('appointmentDate', date.toLocaleDateString());
    localStorage.setItem('appointmentTime', time);
    navigate('/workStart');
  };

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three four />
        <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
          <Link to="/eligible" className="flex items-center gap-3">
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </Link>

          <section className="flex-1 flex flex-col items-center justify-evenly">
            <div className="">
              <h1 className="text-center font-semibold text-2xl text-[#1E1D4C]">
                Plannifiez votre rendez-vous téléphonqiue
              </h1>
              <p className="text-center text-lg text-[#1E1D4C]">
                Sélectionnez la date et l’heure
              </p>
            </div>
            <div className="flex w-[75%] items-center justify-evenly">
              <Calendar
                onChange={onDateChange}
                value={date}
                minDate={new Date()}
              />
              <ChooseTime selected={time} setSelected={setTime} />
            </div>

            <div
              className={`border ${
                date === '' || time === null
                  ? 'border-[#C8CCD8]'
                  : 'border-[#18808A]'
              } rounded-[40px] p-1 bg-[#FCFFFE]`}
            >
              <button
                type="submit"
                onClick={submitHandler}
                disabled={date === '' || time === null}
                className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
              >
                CONTINUER
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TelephoneAppointment;
