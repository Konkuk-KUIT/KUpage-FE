import SignupInputBox from './SignupInputBox';

interface SignupStepOneProps {
  name: string;
  onChange: (value: string) => void;
}

const SignupStepOne = ({ name, onChange }: SignupStepOneProps) => {
  return (
    <div className="ml-80 mr-40">
      <SignupInputBox label="이름" value={name} onChange={onChange} placeholder="ex) 홍길동" />
    </div>
  );
};

export default SignupStepOne;
