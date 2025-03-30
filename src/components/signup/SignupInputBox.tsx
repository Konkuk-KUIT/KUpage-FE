interface SignupInputBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  isError?: boolean;
}

const SignupInputBox = ({
  label,
  value,
  onChange,
  placeholder = '',
  helperText = '',
  errorText = '',
  isError = false,
}: SignupInputBoxProps) => {
  return (
    <div className="flex flex-col mt-8 text-white w-full max-w-[100%] relative">
      <div className="flex justify-between items-center mb-12">
        <label className="text-24 font-700 text-left">{label}</label>
        {helperText && <span className="text-13 font-400 text-[#D5DA40]">{helperText}</span>}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray border-2 border-[#868686] border-solid rounded-8 px-16 py-12 text-16 transition"
      />
      {isError && (
        <span className="text-13 font-400 left-8 top-100 absolute text-[#D5DA40]">{errorText}</span>
      )}
    </div>
  );
};

export default SignupInputBox;
