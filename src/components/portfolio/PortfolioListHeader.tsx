import { useState, useRef } from 'react';
import SearchIcon from '../../assets/imgs/Search.svg';
import {
  PART_OPTIONS,
  TAG_SUGGESTIONS_ROW1,
  TAG_SUGGESTIONS_ROW2,
} from '../../constants/PortfolioConstants';
import TextChip from '../commons/TextChip';
import CloseTextChip from '../commons/CloseTextChip';

const PortfolioListHeader = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFilterVisible(true);
  };

  const handleClose = () => {
    setIsFilterVisible(false);
    inputRef.current?.blur();
  };

  const handleReset = () => {
    setSelectedChips([]);
  };

  const handleAddChip = (chip: string) => {
    const newChip = chip.trim();
    if (newChip && !selectedChips.includes(newChip)) {
      setSelectedChips((prev) => [newChip, ...prev]);
    }
  };

  const handleRemoveChip = (chipToRemove: string) => {
    setSelectedChips((prev) => prev.filter((chip) => chip !== chipToRemove));
  };

  const handleSearch = () => {
    handleAddChip(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="w-full text-white pt-104 rounded-lg">
      <h1 className="px-44 text-64 font-700 text-start">Portfolio</h1>
      {/* <p className="mt-2 text-zinc-400">
        문제 해결을 통해 더 나은 경험을 만드는 서비스 기획자, 이지유입니다.
      </p> */}

      <div className="flex max-w-980 h-100 mx-44 px-44 mt-32 mb-44 items-center justify-between rounded-full bg-gray">
        <input
          ref={inputRef}
          type="text"
          placeholder="태그 검색을 통해 검색어로 포트폴리오를 검색해보세요."
          className="w-full mr-20 text-32  bg-gray placeholder-[#A8A8A8] truncate"
          onFocus={handleFocus}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <div onClick={handleSearch} className="cursor-pointer">
          <img src={SearchIcon} />
        </div>
      </div>

      {isFilterVisible ? (
        <>
          <div className="pt-6 mt-6 py-40 flex flex-col gap-24 bg-gray">
            <div className="flex flex-wrap gap-16 pl-44">
              {PART_OPTIONS.map((chip) => (
                <TextChip
                  key={chip}
                  text={chip}
                  isSelected={false}
                  onClick={() => handleAddChip(chip)}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-16 pl-44">
              {TAG_SUGGESTIONS_ROW1.map((chip) => (
                <TextChip
                  key={chip}
                  text={chip}
                  isSelected={false}
                  onClick={() => handleAddChip(chip)}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-16 pl-44">
              {TAG_SUGGESTIONS_ROW2.map((chip) => (
                <TextChip
                  key={chip}
                  text={chip}
                  isSelected={false}
                  onClick={() => handleAddChip(chip)}
                />
              ))}
            </div>
          </div>

          <div className="bg-gray py-28 mt-12 flex items-center justify-between">
            <div className="flex flex-wrap gap-16 pl-44">
              {selectedChips.map((chip) => (
                <CloseTextChip key={chip} text={chip} onRemove={() => handleRemoveChip(chip)} />
              ))}
            </div>

            <div className="flex mr-32 gap-24">
              <button
                onClick={handleReset}
                className="px-28 h-60 text-24 font-600 text-center transition-colors bg-[#17222C] text-white rounded-full"
              >
                초기화
              </button>
              <button
                onClick={handleClose}
                className="px-28 h-60 text-24 font-600 text-center transition-colors bg-[#17222C] text-white rounded-full"
              >
                닫기
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-8 bg-gray" />
      )}
    </div>
  );
};

export default PortfolioListHeader;
