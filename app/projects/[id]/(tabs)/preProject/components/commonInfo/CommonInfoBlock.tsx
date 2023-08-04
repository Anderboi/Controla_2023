import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import InfoBlock from "@/components/feature/infoblock/InfoBlock";

import getProjectInfo from "@/actions/getProjectInfo";

import { Database } from "@/types/supabase";
import Button from "@/components/common/inputs/Button";
import InfoItem from "@/components/common/InfoBlock/InfoItem";

interface BlockProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
}

const CommonInfoBlock = async ({ project }: BlockProps) => {
  const projectInfo = await getProjectInfo(project.project_id);

  return (
    <>
      <ContentBlock title="Общая информация">
        <ContainerBox
          className="
            flex
            flex-col
            divide-y-[0.5px]
            bg-elevated-1-bg-dark
            !py-0
            text-primary-text-dark
            "
        >
          <dl className="divide-y divide-primary-border-dark">
            <InfoItem
              title="Адрес"
              content={`${project.address_country}, ${project.address_city}, ${project.address_street}`}
            />
            <InfoItem
              title="Площадь объекта"
              content={`${project.area} кв.м.`}
            />
            <InfoItem
              title="Назначение объекта"
              content={projectInfo.purpose || "Жилое"}
            />
            <InfoItem
              title="Этажность"
              content={`${projectInfo.storeys} этаж`}
            />
            <InfoItem
              title="Количество единовременно проживающих"
              content={`${projectInfo.residing} человека`}
            />
            {/* <div className="px-0 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-primary-text-dark">
                  Attachments
                </dt>
                <dd className="mt-2 text-sm text-secondary-text-dark sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-primary-border-dark rounded-md border border-primary-border-dark"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        {/* <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        /> 
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            resume_back_end_developer.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            2.4mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        {/* <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        /> 
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            coverletter_back_end_developer.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            4.5mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div> */}
          </dl>
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default CommonInfoBlock;
