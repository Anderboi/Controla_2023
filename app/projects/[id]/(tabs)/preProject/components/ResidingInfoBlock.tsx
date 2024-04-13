"use client";

import React, { useEffect, useState } from "react";
import ContentBlock from "@/components/common/ContentBlock";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import InfoItem from "@/components/common/InfoBlock/InfoItem";
import { Award, Baby, Users } from "lucide-react";

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
  }, [supabase, people]);

  return (
    <ContentBlock title="Информация о проживающих">
      <dl>
        <InfoItem
          key={"residing"}
          icon={<Users />}
          title="Количество единовременно проживающих"
          content={`$projectInfo.residing человека`}
        />
        <InfoItem key={"children"} icon={<Baby />} title="Дети" content={`1`} />
        <InfoItem
          key={"hobbies"}
          icon={<Award />}
          title="Наличие профессий/увлечений, требующих специального решения интерьера"
          content={`Нет`}
        />
      </dl>

      {/* <InfoDataGrid> //? Блок с информацией о каждом отдельном проживающем
        <AddResidentBlock />
        {people.map((resident, index) => (
          <ResidingCard key={index} resident={resident} />
        ))}
      </InfoDataGrid> */}
    </ContentBlock>
  );
};

export default ResidingInfoBlock;
