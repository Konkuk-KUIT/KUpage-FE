import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

interface DatePickerInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DatePickerInput = ({ label, value, onChange }: DatePickerInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formatted = date.toISOString().split('T')[0];
      onChange(formatted);
    } else {
      onChange('');
    }
  };

  return (
    <div className="flex flex-col text-white mt-8">
      <label className="mb-12 text-24 font-700 text-left">{label}</label>
      <div className="w-full relative bg-gray  border-2 border-[#868686] border-solid rounded-8 px-16 py-12">
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          dateFormat="yyyy. MM. dd"
          placeholderText="0000. 00. 00"
          className="w-full text-16"
          wrapperClassName="w-full"
        />
        <Calendar className="absolute right-16 top-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default DatePickerInput;
