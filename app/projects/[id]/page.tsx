import SubtitleBlock from "@/components/common/SubtitleBlock";
import { ProjectImagesCarousel } from "../_components/ProjectImagesCarousel";
import { ProjectStages } from "../_components/ProjectStages";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const projectId = params.id;

  const active = 0;

  return (
    <section className="space-y-4">
      {/* //* Carousel */}
      <SubtitleBlock title="Галлерея проекта">
        <ProjectImagesCarousel/>
      </SubtitleBlock>

      <SubtitleBlock title="Команда проекта">
        <div className='rounded-lg bg-secondary-bg-dark p-4 text-tertiary-text-dark'>//TODO: Команда проекта</div>
      </SubtitleBlock>

      {/* //* Stages */}
      <SubtitleBlock title="Стадии">
        <ProjectStages active={active} projectId={projectId}/>
      </SubtitleBlock>
    </section>
  );
};

export default ProjectPage;
