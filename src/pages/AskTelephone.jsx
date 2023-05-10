import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import DoubleNumberInput from '../components/DoubleNumberInput';

const AskTelephone = () => {
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  const [telephone, settelephone] = React.useState('');
  const [mailAddress, setmailAddress] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (telephone !== '' && mailAddress !== '') {
      localStorage.setItem('telephone', telephone);
      localStorage.setItem('mailAddress', mailAddress);
      navigate('/eligible');
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
              to={'/name' + window.location.search}
              className="flex items-center gap-3"
            >
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '94%' }}
              ></div>
            </div>

            <section className="flex-1 flex flex-col items-center gap-12 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Comment vous appelez-vous ?
              </h1>

              <div className="py-6 w-full">
                <DoubleNumberInput
                  isMobile={isMobile}
                  state1={telephone}
                  state2={mailAddress}
                  type1="number"
                  type2="email"
                  changeHandler1={(e) => settelephone(e.target.value)}
                  changeHandler2={(e) => setmailAddress(e.target.value)}
                  onSubmit={onSubmit}
                  nextNav="/electricbill"
                  label1={'Téléphone'}
                  label2={'Adresse mail'}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskTelephone;
