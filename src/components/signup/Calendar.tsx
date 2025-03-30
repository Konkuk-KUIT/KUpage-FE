import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from 'lucide-react';

interface Props {
  label: string;
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2000 },
  (_, i) => getYear(new Date()) - i
);

const MONTHS_KR = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const Calendar = ({ label, selectedDate, setSelectedDate }: Props) => {
  return (
    <div className="flex flex-col text-white mt-8 w-full">
      <label className="mb-12 text-24 font-700 text-left">{label}</label>
      <div className="w-full relative bg-gray border-2 border-[#868686] rounded-8 px-16 py-12">
        <DatePicker
          dateFormat="yyyy. MM. dd"
          formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          shouldCloseOnSelect
          yearDropdownItemNumber={100}
          minDate={new Date('2000-01-01')}
          maxDate={new Date()}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="0000. 00. 00"
          className="w-full bg-gray text-white text-16 rounded-8 placeholder-white"
          wrapperClassName="w-full"
          calendarClassName="bg-gray text-white rounded-lg p-6 shadow-lg text-base"
          dayClassName={(d) =>
            d.toDateString() === selectedDate?.toDateString()
              ? 'bg-[#F7931E] rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-[#c27101]'
              : 'w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10'
          }
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="flex justify-between items-center px-4 py-2">
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(+value)}
                className="bg-gray text-white border border-white/40 rounded px-3 py-2 text-sm focus:outline-none"
              >
                {YEARS.map((year) => (
                  <option key={year} value={year} className="text-black">
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={getMonth(date)}
                onChange={({ target: { value } }) => changeMonth(+value)}
                className="bg-gray text-white border border-white/40 rounded px-3 py-2 text-sm focus:outline-none"
              >
                {MONTHS_KR.map((month, idx) => (
                  <option key={month} value={idx} className="text-black">
                    {month}
                  </option>
                ))}
              </select>
            </div>
          )}
        />
        <CalendarIcon className="absolute right-16 top-1/2 -translate-y-1/2 w-20 h-20 text-white pointer-events-none" />
      </div>
    </div>
  );
};

export default Calendar;
