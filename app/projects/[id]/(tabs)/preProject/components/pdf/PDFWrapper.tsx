"use client";

import React, { useEffect, useState } from "react";
import ReactPDFFile from "./ReactPDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Button from "@/components/common/inputs/Button";
import { Database } from "@/types/supabase";

export interface PDFProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
  info: Database["public"]["Tables"]["project_info"]["Row"];
  residents: Database["public"]["Tables"]["inhabitant_info"]["Row"][];
  client: any;
  // premises: Database["public"]["Tables"]["room_info"]["Row"][];
  premises: {
    area: number | null;
    furnishing: string | null;
    name: string;
    project_id: number;
    room_number: number;
    storey: number;
    room_furnishing?: {
      name: string;
      room_number: number;
      quantity: number;
      brand: string;
      materials: string[];
      price: number;
      link: string;
      tech_spec: string;
      isOrdered: boolean;
      isDelivered: boolean;
    };
  }[];
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
      <PDFViewer height={"900px"} width={"100%"} showToolbar={true}>
        <ReactPDFFile
          info={info}
          project={project}
          residents={residents}
          client={client}
          premises={premises}
          engeneeringData={engeneeringData}
        />
      </PDFViewer>

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
