interface CreateButtonProps {
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  isBig?: boolean;
  children: string;
  onClick?: () => void;
}

const CreateButton = ({ type = 'button', form, isBig, children, onClick }: CreateButtonProps) => {
  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      className={`rounded-10 bg-gray border-1 border-solid border-border text-white text-20 font-700 box-border hover:text-gray hover:bg-main hover:border-none ${isBig ? 'px-28 py-24' : 'px-20 py-12'}`}
    >
      {children}
    </button>
  );
};

export default CreateButton;
