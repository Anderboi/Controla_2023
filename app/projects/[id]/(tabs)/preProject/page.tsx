import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import CommonInfoBlock from "./components/CommonInfoBlock";
import PremisesBlock from "./components/PremisesBlock";
import EngeneeringSystemsBlock from "./components/EngeneeringSystemsBlock";
import CommonInfoBlockAlt from './components/CommonInfoBlockAlt';

const PreProject = async ({
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: number };
}) => {
  const id = params.id;

  const project = await getCurrntProject(id);

  return (
    <>
      <CommonInfoBlockAlt project={project} />
      {/* <CommonInfoBlock project={project} /> */}
      <PremisesBlock id={id} />
      <EngeneeringSystemsBlock id={id} />
    </>
  );
};

export default PreProject;
