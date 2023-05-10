import React from 'react';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import NumberInput from '../components/NumberInput';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';

const AskAccomodationAffected = () => {
  const isMobile = useCheckMobileScreen();
  const [accomodationAffected, setAccomodationAffected] = React.useState('');

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setAccomodationAffected(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (accomodationAffected !== '') {
      localStorage.setItem('accomodationAffected', accomodationAffected);

      navigate('/accomodationAffectee');
    }
  };

  const IDKHandler = () => {
    setAccomodationAffected('NILL');
    localStorage.setItem('accomodationAffected', 'NILL');
  };

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
            <Link
              to={'/goals ' + window.location.search}
              className="flex items-center gap-3"
            >
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '57%' }}
              ></div>
            </div>

            <section className="flex-1 flex flex-col items-center gap-12 py-16">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Où se situe le logement concerné par les travaux?
              </h1>

              <div className="flex gap-14 py-6 w-full">
                <NumberInput
                  isMobile={isMobile}
                  state={accomodationAffected}
                  changeHandler={changeHandler}
                  type={'string'}
                  onSubmit={onSubmit}
                  IDKHandler={IDKHandler}
                  label={'Adresse'}
                  placeholder="32 rue Garibaldi 94100 Saint maur des fossès"
                  unit=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskAccomodationAffected;
