"use client";

import React, { useEffect, useState } from "react";
import ReactPDFFile from "./ReactPDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Button from "@/components/common/inputs/Button";

export interface PDFProps {
  project: any;
  info: any;
  residents: any;
  client: any
}

const PDFWrapper = ({ info, project, residents, client }: PDFProps) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <>
      {/* <PDFViewer height={"900px"} width={"100%"} showToolbar={true}>
        <ReactPDFFile
          info={info}
          project={project}
          residents={residents}
          client={client}
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
          />
        }
        fileName="Техническое задание.pdf"
      >
        {({ blob, url, loading, error }) =>
          !error && loading ? (
            <Button mode="action" className="w-full">
              {"Загрузка ..."}
            </Button>
          ) : (
            <Button mode="action" className="w-full">
              {"Скачать PDF"}
            </Button>
          )
        }
      </PDFDownloadLink>
    </>
  );
};

export default PDFWrapper;
