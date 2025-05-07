import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselBtnLeft from '../../assets/imgs/CarouselBtnLeft.svg';
import CarouselBtnRight from '../../assets/imgs/CarouselBtnRight.svg';
import { CURRICULUM } from '../../constants/curriculumConstants';
import TextChip from '../commons/RoleChip';

const CurriculumCarousel = () => {
  const [selectedPart, setSelectedPart] = useState('Android');
  const [weekIndex, setWeekIndex] = useState(0);
  const selectedCurriculum = CURRICULUM[selectedPart][5];

  const handlePrev = () => {
    setWeekIndex((prevIndex) => (prevIndex === 0 ? selectedCurriculum.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setWeekIndex((prevIndex) => (prevIndex === selectedCurriculum.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {/* 파트 선택 버튼 */}
      <div className="flex justify-center gap-16 mb-28">
        {Object.keys(CURRICULUM).map((part) => (
          <TextChip
            key={part}
            text={part}
            isSelected={selectedPart === part}
            onClick={() => {
              setSelectedPart(part);
              setWeekIndex(0); // 파트 변경 시 1주차로 초기화
            }}
          />
        ))}
      </div>

      {/* 커리큘럼 카드 */}
      <div className="bg-gray border-border border rounded-10 w-1116 h-312">
        <h3 className="text-main text-32 font-700 mt-36 ml-44 text-start">
          {selectedPart} Curriculum
        </h3>

        <div className="flex justify-between mt-36 mx-32">
          <button onClick={handlePrev}>
            <img src={CarouselBtnLeft} className="size-56" />
          </button>

          <div className="flex-center flex-col gap-16 text-white">
            <h4 className="text-32 font-700">{weekIndex + 1}주차</h4>
            <p className="text-24 font-500">{selectedCurriculum[weekIndex]}</p>
          </div>

          <button onClick={handleNext}>
            <img src={CarouselBtnRight} className="size-56" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumCarousel;
