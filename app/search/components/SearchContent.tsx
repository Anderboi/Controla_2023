"use client";

import GallaryGrid from '@/components/common/GallaryGrid';
import ProjectCard from "@/components/common/cards/ProjectCard";
import { Database } from "@/types/supabase";
import React from "react";

interface SearchContentProps {
  data: Database["public"]["Tables"]["projects"]["Row"][];
}

const SearchContent = ({ data }: SearchContentProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-6 w-full text-center text-secondary-text-dark">
        Данные не найдены
      </div>
    );
  }

  return (
    <GallaryGrid>
      {data.map((item) => (
        <ProjectCard 
          key={item.project_id} 
          onClick={() => {}} 
          data={item} />
      ))}
    </GallaryGrid>
  );
};

export default SearchContent;
