import SubtitleBlock from "@/components/common/SubtitleBlock";
import { ProjectImagesCarousel } from "../_components/ProjectImagesCarousel";
import { ProjectStages } from "../_components/ProjectStages";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const projectId = params.id;

  const active = 0;

  return (
    <>
      <SubtitleBlock title="Галлерея проекта">
        <ProjectImagesCarousel />
      </SubtitleBlock>

      <SubtitleBlock title="Команда проекта">
        <div className="rounded-lg bg-secondary-bg-dark p-4 text-tertiary-text-dark">
          Команда проекта
        </div>
      </SubtitleBlock>

      <SubtitleBlock title="Стадии">
        <ProjectStages active={active} projectId={projectId} />
      </SubtitleBlock>
    </>
  );
};

export default ProjectPage;
