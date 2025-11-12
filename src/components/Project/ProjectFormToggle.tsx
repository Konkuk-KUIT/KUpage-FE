import Delete from '../../assets/imgs/Delete.svg';

interface ProjectFormToggleProps {
  toggleText: string;
  onClick: () => void;
}

const ProjectFormToggle = ({ toggleText, onClick }: ProjectFormToggleProps) => {
  return (
    <div className="flex max-w-fit px-24 py-8 justify-center items-center gap-16 rounded-full border-2 border-solid border-border bg-gray">
      <span className="text-white text-20 font-700">{toggleText}</span>
      <img src={Delete} onClick={onClick} />
    </div>
  );
};

export default ProjectFormToggle;
