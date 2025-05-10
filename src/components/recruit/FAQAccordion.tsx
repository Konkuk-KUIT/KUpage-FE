import { useState } from 'react';
import ArrowDown from '../../assets/imgs/ArrowDown.svg';
import { FAQ } from '../../constants/faqConstants';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-24">
      {FAQ.map((item, index) => (
        <div className="w-1080 px-36 py-28 bg-gray border-2 border-solid border-border rounded-10 text-white">
          <div key={index} className="flex justify-between items-center">
            <h3 className="text-24 font-600">{item.question}</h3>
            <div onClick={() => toggleOpen(index)} className="cursor-pointer">
              {openIndex === index ? (
                <img src={ArrowDown} className="w-20 scale-y-[-1]" />
              ) : (
                <img src={ArrowDown} className="w-20" />
              )}
            </div>
          </div>
          {openIndex === index && (
            <p className="text-24 mt-16 leading-[4rem] text-start">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
