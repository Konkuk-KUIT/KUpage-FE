import paginationRight from '../../assets/imgs/PaginationRight.svg';
import paginationLeft from '../../assets/imgs/PaginationLeft.svg';
import { useState } from 'react';

const CHUNK_SIZE = 5;

interface PaginationProps {
  length: number;
  setPageIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ length, setPageIdx }: PaginationProps) => {
  const chunkArray = (array: number[]): number[][] => {
    const result = [];
    for (let i = 0; i < array.length; i += CHUNK_SIZE) {
      result.push(array.slice(i, i + CHUNK_SIZE));
    }
    return result;
  };
  const pageNums = Array.from({ length }, (_, i) => i + 1);
  const pages = chunkArray(pageNums);
  const [chunkIdx, setChunkIdx] = useState(0);
  return (
    <div className="flex items-center gap-32">
      <img
        src={paginationLeft}
        alt="5페이지 전으로 가는 버튼"
        onClick={() => chunkIdx > 0 && setChunkIdx(chunkIdx - 1)}
        className="cursor-pointer"
      />
      <div className="flex items-center gap-20">
        {pages[chunkIdx].map((pageNum) => (
          <span
            key={pageNum}
            className="text-20 font-500 text-white cursor-pointer"
            onClick={() => setPageIdx(pageNum)}
          >
            {pageNum}
          </span>
        ))}
      </div>
      <img
        src={paginationRight}
        alt="5페이지 후로 가는 버튼"
        onClick={() => chunkIdx < pages.length - 1 && setChunkIdx(chunkIdx + 1)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Pagination;
