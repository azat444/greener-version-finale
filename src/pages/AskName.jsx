import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import DoubleNumberInput from '../components/DoubleNumberInput';

const AskName = () => {
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  const [firstName, setfirstName] = React.useState('');
  const [lastName, setLastname] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName !== '' && lastName !== '') {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      navigate('/telephone');
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three four />
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src="/assets/home3d.png" alt="" />
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-4 w-full px-16 pt-6 pb-4 ">
            <Link
              to={'/incometax' + window.location.search}
              className="flex items-center gap-3"
            >
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '85%' }}
              ></div>
            </div>

            <section className="flex-1 flex flex-col items-center gap-12 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Comment vous appelez-vous ?
              </h1>

              <div className="py-6 w-full">
                <DoubleNumberInput
                  isMobile={isMobile}
                  state1={firstName}
                  state2={lastName}
                  type1="string"
                  type2="string"
                  changeHandler1={(e) => setfirstName(e.target.value)}
                  changeHandler2={(e) => setLastname(e.target.value)}
                  onSubmit={onSubmit}
                  nextNav="/electricbill"
                  label1={'Prénom'}
                  label2={'Nom'}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskName;
