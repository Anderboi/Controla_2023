import ContainerBox from '@/components/common/ContainerBox';
import { Database } from '@/types/supabase';
import React from 'react'

interface BlockProps {
  project: Database["public"]["Tables"]["projects"]['Row'];
}

const CommonInfoBlock = ({project}:BlockProps) => {
  return (
    <ContainerBox classname="bg-elevated-1-bg-dark flex flex-col gap-y-1 text-primary-text-dark">
      <h2 className="sm:text-xl pb-2 font-bold">Общая информация по проекту</h2>
      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-between
          gap-y-4
          sm:items-end
          w-full
          border-t-[0.5px]
          border-primary-border-dark
          py-2
          "
      >
        <span>Адрес: </span>
        <span>{`${project.address_country}, ${project.address_city}, ${project.address_street}`}</span>
      </div>
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          gap-y-4 
          sm:items-end 
          w-full 
          border-t-[0.5px] 
          border-primary-border-dark 
          py-2
          "
      >
        <span>Площадь подлежащая проектированию: </span>
        <span>{project.area} кв.м.</span>
      </div>
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          gap-y-4 
          sm:items-end 
          w-full 
          border-t-[0.5px] 
          border-primary-border-dark 
          py-2
          "
      >
        <span>Назначение объекта: </span>
        <span>Жилое</span>
      </div>
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          gap-y-4 
          sm:items-end 
          w-full 
          border-t-[0.5px] 
          border-primary-border-dark 
          py-2
          "
      >
        <span>Этажность: </span>
        <span>1 этаж</span>
      </div>
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          gap-y-4 
          sm:items-end 
          w-full 
          border-t-[0.5px] 
          border-primary-border-dark 
          py-2
          "
      >
        <span>Количество единовременно проживающих: </span>
        <span>4 человека</span>
      </div>
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          gap-y-4 
          sm:items-end 
          w-full 
          border-t-[0.5px] 
          border-primary-border-dark 
          py-2
          "
      >
        <span>Перечень помещений </span>
        <span>5 помещений</span>
      </div>
    </ContainerBox>
  );
}

export default CommonInfoBlock