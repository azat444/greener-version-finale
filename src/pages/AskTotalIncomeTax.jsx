import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SelectComp from '../components/SelectComp';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';

const AsktotalIncomeTax = () => {
  const isMobile = useCheckMobileScreen();
  const [totalIncomeTax, settotalIncomeTax] = React.useState('');
  const [taxSlabs, setTaxSlabs] = React.useState([14879, 19074, 29148]);

  const setSelected = (number) => {
    settotalIncomeTax(number);
    localStorage.setItem('totalIncomeTax', number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    const people = localStorage.getItem('people');

    const baseSlab = [14879, 19074, 29148];
    const perPerson = [5012, 6651, 9744];

    if (people > 1) {
      const newSlab = baseSlab.map((item, index) => {
        return item + perPerson[index] * (people - 1);
      });
      setTaxSlabs(newSlab);
    }
  }, []);

  React.useEffect(() => {
    if (totalIncomeTax !== '') {
      navigate('/name');
    }
  }, [totalIncomeTax]);

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
            <Link to={'/people'} className="flex items-center gap-3">
              <Arrow />
              <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
            </Link>
            <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
              <div
                className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
                style={{ width: '78%' }}
              ></div>
            </div>

            <section className="flex-1 flex flex-col items-center gap-6 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C] text-center">
                A combien s’élève le revenu total de votre foyer fiscal par an?
              </h1>

              <div className="grid grid-cols-2 gap-6 py-12  w-3/4">
                <SelectComp
                  selected={totalIncomeTax === '1'}
                  setSelected={() => setSelected('1')}
                  text={'Inférieur à ' + taxSlabs[0] + ' €'}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={totalIncomeTax === '2'}
                  setSelected={() => setSelected('2')}
                  text={'Entre ' + taxSlabs[0] + ' et ' + taxSlabs[1] + ' €'}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={totalIncomeTax === '3'}
                  setSelected={() => setSelected('3')}
                  text={'Entre ' + taxSlabs[1] + ' et ' + taxSlabs[2] + ' €'}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={totalIncomeTax === '4'}
                  setSelected={() => setSelected('4')}
                  text={'Supérieur à ' + taxSlabs[2] + ' €'}
                  isMobile={isMobile}
                />
              </div>
              {/* <div
                className={`border ${
                  totalIncomeTax === ''
                    ? 'border-[#C8CCD8]'
                    : 'border-[#18808A]'
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={totalIncomeTax === ''}
                  className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
                >
                  CONTINUER
                </button>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsktotalIncomeTax;
