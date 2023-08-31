import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { PDFProps } from "./PDFWrapper";

// Register font
Font.register({ family: "Inter-Regular", src: "/assets/Inter-Regular.ttf" });

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "Inter-Regular",
    padding: 24,
    // paddingHorizontal: 24,
    // width: "100%",
  },
  section: {
    display: "flex",
    flexDirection: "column",

    border: "1px solid black",
    marginTop: 16,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
  },

  subheader: {
    fontSize: 12,
    fontWeight: "bold",

    backgroundColor: "#404040",
    color: "white",

    display: "flex",
    width: "100%",

    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
  },
  datatable: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#fff",

    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,

    // width: "100%",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",

    fontSize: 10,

    // justifyContent: "space-between",
  },
  value: { width: "30%", paddingRight: 8 },
  label: { width: "70%" },
});

const ReactPDFFile = ({ info, project, residents, client }: PDFProps) => {

  const startDate = new Date(info.created_at).toLocaleDateString("ru-RU");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Техническое задание (приложение №3)</Text>

        <View style={styles.section}>
          <Text style={styles.subheader}>Общие сведения</Text>

          <View style={styles.datatable}>
            <View style={styles.tableRow}>
              <Text style={styles.value}>Дата отчета:</Text>

              <Text style={styles.label}>{startDate}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.value}>Ф.И.О. клиента:</Text>
              <Text style={styles.label}>{client}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>Общая информация</Text>

          <View style={styles.datatable}>
            <View style={styles.tableRow}>
              <Text style={styles.value}>Адрес объекта:</Text>
              <Text
                style={styles.label}
              >{`${project.address_country}, ${project.address_city}, ${project.address_street}`}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.value}>Площадь объекта:</Text>
              <Text style={styles.label}>{project.area} кв.м.</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.value}>Назначение объекта:</Text>
              <Text style={styles.label}>{info.purpose}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.value}>
                Колличество единовременно проживающих:
              </Text>
              <Text style={styles.label}>{info.residing}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.value}>
                Наличие профессий/увлечений, требующих специального решения
                интерьера (спорт, музыка и т.д.):
              </Text>
              <View style={styles.label}>
                {residents.map((person: any, index:number) => (
                  <>
                    <Text key={index}>{`${person.lifestyle} `}</Text>
                    <br />
                  </>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReactPDFFile;
