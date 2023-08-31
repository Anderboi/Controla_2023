"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const InvoicePDF = dynamic(
  () =>
    import("@/app/projects/[id]/(tabs)/preProject/components/pdf/PDFWrapper"),
  {
    ssr: false,
  }
);

const MyPDFView = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  // return <InvoicePDF />;
  return <div>1</div>;
};

export default MyPDFView;
