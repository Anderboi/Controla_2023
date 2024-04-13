"use client";

import React, { useEffect, useState } from "react";
import ReactPDFFile from "./ReactPDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import { Database } from "@/types/supabase";
import { Button } from '@/components/ui/button';

export interface PDFProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
  info: Database["public"]["Tables"]["project_info"]["Row"];
  residents: Database["public"]["Tables"]["inhabitant_info"]["Row"][];
  client: any;
  premises: Database["public"]["Tables"]["room_info"]["Row"][];
  engeneeringData: Database["public"]["Tables"]["engeneering_data"]["Row"];
}

const PDFWrapper = ({
  info,
  project,
  residents,
  client,
  premises,
  engeneeringData,
}: PDFProps) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <>
      {/* //! PDF Viewer, only for development purposes. Remove on deploy */}
      {/* <PDFViewer height={"900px"} width={"100%"} showToolbar={true}>
        <ReactPDFFile
          info={info}
          project={project}
          residents={residents}
          client={client}
          premises={premises}
          engeneeringData={engeneeringData}
        />
      </PDFViewer> */}

      {/* //? Button */}
      <PDFDownloadLink
        onClick={() => {}}
        document={
          <ReactPDFFile
            info={info}
            project={project}
            residents={residents}
            client={client}
            premises={premises}
            engeneeringData={engeneeringData}
          />
        }
        fileName="Техническое задание.pdf"
      >
        {({ blob, url, loading, error }) =>
          !error && loading ? (
            <Button  className="w-full">
              {"Загрузка ..."}
            </Button>
          ) : (
            <Button size={'lg'} variant={'outline'} className="w-full text-lg text-accent-light dark:!border-accent-dark dark:text-accent-dark">
              {"Скачать PDF"}
            </Button>
          )
        }
      </PDFDownloadLink>
    </>
  );
};

export default PDFWrapper;
