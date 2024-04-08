import { ProjectImagesCarousel } from "../_components/ProjectImagesCarousel";
import { ProjectStages } from "../_components/ProjectStages";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const projectId = params.id;

  const active = 0;

  return (
    <section className="space-y-6 ">
      {/*//? Address block */}
      {/* <div className="px-4"> */}
      {/* <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Адрес
        </h2>
        <p className="text-base leading-7">
          Москва, ул. Ульянова 8, “Миракс Парк”
        </p> */}
      {/* </div> */}
      <div>
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight px-4">
          Команда проекта
        </h2>
      </div>
      {/* //* Carousel */}
      <ProjectImagesCarousel />

      {/* //* Stages */}
      <div>
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight px-4">
          Стадии
        </h2>
        <ProjectStages active={active} projectId={projectId} />
      </div>
    </section>
  );
};

export default ProjectPage;
