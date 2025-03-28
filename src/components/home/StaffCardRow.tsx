import { useEffect, useRef } from 'react';
import { StaffMember } from '../../constants/StaffConstants';
import StaffCard from './StaffCard';

interface StaffCardRowProps {
  staffs: StaffMember[];
}

const StaffCardRow = ({ staffs }: StaffCardRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (!currentRef) return;

    let startX: number;
    let scrollLeft: number;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - currentRef.offsetLeft;
      scrollLeft = currentRef.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX) return;
      const x = e.touches[0].pageX - currentRef.offsetLeft;
      const walk = (x - startX) * 2;
      currentRef.scrollLeft = scrollLeft - walk;
      e.preventDefault();
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        currentRef.scrollLeft += e.deltaX || e.deltaY;
      } else if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        currentRef.scrollLeft += e.deltaY;
      }
    };

    currentRef.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    currentRef.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    currentRef.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      currentRef.removeEventListener('touchstart', handleTouchStart);
      currentRef.removeEventListener('touchmove', handleTouchMove);
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden px-20">
      <div
        ref={scrollContainerRef}
        className="max-w-full overflow-x-auto touch-pan-x custom-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4FE570 #1a1a1a',
        }}
      >
        <div className="flex flex-nowrap justify-center gap-32 min-w-max mt-40 pb-8">
          {staffs.map((member) => (
            <div key={member.name} className="flex-shrink-0">
              <StaffCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffCardRow;
