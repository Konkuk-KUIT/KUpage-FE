interface ProjectFormSection {
  title: React.ReactNode;
  desc?: string;
  required?: boolean;
  children?: React.ReactNode;
  gap?: number;
  fontSize?: number;
}

const FormSection = ({
  title,
  desc,
  required,
  children,
  gap = 16,
  fontSize = 32,
}: ProjectFormSection) => {
  return (
    <div className={`flex flex-col gap-${gap} w-full`}>
      <span className={`text-white text-${fontSize} font-600 text-start`}>
        {title} {required && <span className="text-yellow">*</span>}
      </span>
      {desc && <span className="text-yellow text-14 font-400 text-start">{desc}</span>}
      {children}
    </div>
  );
};

export default FormSection;
