interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
}

const ProjectCard = ({ img, title, description }: ProjectCardProps) => {
  return (
    <div className="flex-shrink-0 w-244 h-auto border-border border-[0.1rem] rounded-10 bg-border">
      <img src={img} alt={title} className="w-full  object-cover rounded-t-10 h-96" />

      <div className="bg-gray  items-start text-white text-16 flex rounded-b-10 flex-col px-12 py-8 gap-4">
        <h3 className="font-700">{title}</h3>
        <p className="font-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
