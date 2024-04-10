"use client";

import React, { useEffect, useState } from "react";
import ContentBlock from "@/components/common/ContentBlock";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import AddResidentBlock from "./AddResidentBlock";
import ResidingCard from "./ResidingCard";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface ResidingInfoBlockProps {
  residents: any[];
}

const ResidingInfoBlock = ({ residents }: ResidingInfoBlockProps) => {
  const supabase = useSupabaseClient();

  const [people, setPeople] = useState(residents);

  useEffect(() => {
    const channel = supabase
      .channel("realtime resident data")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "inhabitant_info" },
        (payload) => {
          setPeople([...people, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);
  return (
    <ContentBlock title="Информация о проживающих">
      <InfoDataGrid>
        <AddResidentBlock />
        {people.map((resident, index) => (
          <ResidingCard key={index} resident={resident} />
        ))}
      </InfoDataGrid>
    </ContentBlock>
  );
};

export default ResidingInfoBlock;
