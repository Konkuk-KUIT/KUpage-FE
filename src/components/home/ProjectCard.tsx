interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
}

const ProjectCard = ({ img, title, description }: ProjectCardProps) => {
  return (
    <div className="w-244 h-auto border-border border-[0.1rem] rounded-10 bg-gray-400">
      <img src={img} alt={title} className="w-full h-96 object-cover rounded-10" />

      <div className="bg-gray px-12 py-8 items-start text-white text-16 flex gap-4 rounded-10 flex-col">
        <h3 className="font-700">{title}</h3>
        <p className="font-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
