import { useState } from 'react';
import { EVENTS } from '../../constants/EventConstants';
import EventCard from './EventCard';

const CARDS_PER_ROW = 4; // 가로 한 줄에 들어가는 카드 수

const EventCardGrid = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const selectedIndex = EVENTS.findIndex((e) => e.id === selectedId);
  const selectedRow = selectedIndex >= 0 ? Math.floor(selectedIndex / CARDS_PER_ROW) : null;

  return (
    <div className="flex flex-wrap gap-32 w-1296 mx-auto mt-20">
      {EVENTS.map((event, index) => {
        const currentRow = Math.floor(index / CARDS_PER_ROW);
        const isSameRow = selectedRow !== null && currentRow === selectedRow;
        const shouldShrink = selectedId !== null && selectedId !== event.id && isSameRow;

        return (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            isSelected={selectedId === event.id}
            shouldShrink={shouldShrink}
            onClick={handleToggle}
          />
        );
      })}
    </div>
  );
};

export default EventCardGrid;
