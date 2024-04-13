import StageCard from "@/app/projects/_components/StageCard";
import { Brush, PaintRoller, PencilRuler, ShoppingCart } from "lucide-react";

const PreProject = () => {
  return (
    <>
      <StageCard
        href={`preProject/brief`}
        title="Техническое задание"
        icon={<Brush />}
        description="Это важный этап, который помогает избежать ошибок на более поздних стадиях и гарантирует результат, соответствующий ожиданиям заказчика."
        key={1}
        state="active"
      />
      <StageCard
        href={`preProject/layoutConcept`}
        title="Планировочное решение"
        icon={<PencilRuler />}
        description="Разработка подробной документации, необходимой для реализации дизайн-проекта."
        key={2}
        state="disabled"
      />
      <StageCard
        href={`preProject/visualizations`}
        title="Визуализация"
        icon={<ShoppingCart />}
        description="Процесс подбора и закупки всех материалов, мебели, оборудования и аксессуаров, необходимых для реализации дизайн-проекта."
        key={3}
        state="disabled"
      />
      <StageCard
        href={`preProject/materials`}
        title="Материалы"
        icon={<PaintRoller />}
        description="Важный этап, который позволяет повысить качество строительства и защитить интересы заказчика."
        key={4}
        state="disabled"
      />
    </>
  );
};

export default PreProject;
