"use client";

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
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-3
      2xl:grid-cols-4
      gap-3
      mt-4"
    >
      {data.map((item) => (
        <ProjectCard 
          key={item.project_id} 
          onClick={() => {}} 
          data={item} />
      ))}
    </div>
  );
};

export default SearchContent;
