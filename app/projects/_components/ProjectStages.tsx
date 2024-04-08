import StageCard from './StageCard';
import { Brush, PaintRoller, PencilRuler, ShoppingCart } from "lucide-react";

interface Props {
  projectId: number;
  active: number;
}
export function ProjectStages({active, projectId}: Props) {

  return (
    <div className="flex flex-col gap-2">
      <StageCard
        href={`${projectId}/preProject`}
        title="Эскизная стадия"
        icon={<Brush />}
        description="Это важный этап, который помогает избежать ошибок на более поздних стадиях и гарантирует результат, соответствующий ожиданиям заказчика."
        key={1}
        state="active"
      />
      <StageCard
        href={`${projectId}/concept`}
        title="Проектные данные"
        icon={<PencilRuler />}
        description="Разработка подробной документации, необходимой для реализации дизайн-проекта."
        key={2}
        state="disabled"
      />
      <StageCard
        href={`${projectId}/preProject`}
        title="Комплектация"
        icon={<ShoppingCart />}
        description="Процесс подбора и закупки всех материалов, мебели, оборудования и аксессуаров, необходимых для реализации дизайн-проекта."
        key={3}
        state="disabled"
      />
      <StageCard
        href={`${projectId}/preProject`}
        title="Строительство"
        icon={<PaintRoller />}
        description="Важный этап, который позволяет повысить качество строительства и защитить интересы заказчика."
        key={4}
        state="disabled"
      />
    </div>
  );
}
