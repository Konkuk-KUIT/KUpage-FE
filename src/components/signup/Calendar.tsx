import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from 'lucide-react';

interface Props {
  label: string;
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const Calendar = ({ label, selectedDate, setSelectedDate }: Props) => {
  return (
    <div className="flex flex-col text-white mt-8 w-full">
      <label className="mb-12 text-24 font-700 text-left">{label}</label>

      <div className="w-full relative bg-gray border-2 border-[#868686] rounded-8 px-16 py-12">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy. MM. dd"
          placeholderText="0000. 00. 00"
          minDate={new Date('1900-01-01')}
          maxDate={new Date()}
          shouldCloseOnSelect
          calendarStartDay={0}
          dropdownMode="select"
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
          className="w-full bg-gray text-white text-16 rounded-8 placeholder-white"
          wrapperClassName="w-full"
          calendarClassName="bg-gray text-white rounded-lg shadow-lg text-12 z-50"
          dayClassName={() => 'w-36 h-36 text-12 pt-8'}
        />
        <CalendarIcon className="absolute right-16 top-1/2 -translate-y-1/2 w-20 h-20 text-white pointer-events-none" />
      </div>
    </div>
  );
};

export default Calendar;
