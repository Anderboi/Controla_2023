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

//* Register font
Font.register({ family: "Inter-Regular", src: "/assets/Inter-Regular.ttf" });

//* Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "Inter-Regular",
    padding: 24,
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
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    fontSize: 10,

    borderBottom: "0.5px solid #dbdbdb",
    paddingBottom: 8,
  },
  value: {
    width: "30%",
    paddingRight: 8,
    color: "#9C9C9C",
  },
  label: { width: "70%" },

  extendedValue1: {
    width: "30%",
    paddingRight: 8,
  },
  extendedValue2: {
    width: "10%",
  },
  extendedValue3: {
    width: "10%",
    textAlign: "center",
  },
  extendedValue4: {
    width: "50%",
    paddingRight: 16,
  },
});

const ReactPDFFile = ({
  info,
  project,
  residents,
  client,
  premises,
  engeneeringData,
}: PDFProps) => {
  //@ts-ignore //TODO: remove
  const startDate = new Date(info.created_at).toLocaleDateString("ru-RU");
  
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.header}>Техническое задание (приложение №3)</Text>
        {/* //* Общие сведения */}
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
        {/* //* Данные объекта */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Данные объекта</Text>

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
              <Text style={styles.value}>Этажность:</Text>
              <Text style={styles.label}>{info.storeys}</Text>
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
          </View>
        </View>
        {/* //* Данные жильцов */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Данные жильцов</Text>

          <View style={styles.datatable}>
            {/* //* Heading */}
            <View style={styles.tableRow}>
              <Text style={styles.extendedValue1}>Имя</Text>

              <Text style={[styles.extendedValue2, { textAlign: "center" }]}>
                Пол
              </Text>
              <Text style={styles.extendedValue3}>Возраст</Text>
              <Text style={[styles.extendedValue4, { textAlign: "center" }]}>
                Увлечения / Ограничения
              </Text>
            </View>
            {/* //* Data */}
            {residents.map((person, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.extendedValue1}>{person.name}</Text>

                <Text style={styles.extendedValue2}>{person.gender}</Text>
                <Text style={styles.extendedValue3}>{person.age}</Text>
                <Text style={styles.extendedValue4}>
                  {`${person.lifestyle}
                  ${person.health_concerns}`}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {/* //* Планировочная структура */}
        <View style={styles.section} break>
          <Text style={styles.subheader}>Планировочная структура</Text>

          <View style={styles.datatable}>
            {info.storeys === 1 ? (
              <>
                {premises.map((room, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text
                      style={styles.value}
                    >{`${room.room_number}. ${room.name}`}</Text>
                    <Text style={styles.label}>{room.area}</Text>
                  </View>
                ))}
              </>
            ) : (
              <>
                {Array.from(Array(info.storeys)).map((storey, index) => (
                  <div key={index}>
                    <Text>{`${index + 1} этаж`}</Text>
                    {premises
                      .filter((room) => room.storey === index + 1)
                      .map((room, index) => (
                        <View key={index} style={styles.tableRow}>
                          <Text
                            style={styles.value}
                          >{`${room.room_number}. ${room.name}`}</Text>
                          <Text style={styles.label}>{room.area}</Text>
                        </View>
                      ))}
                  </div>
                ))}
              </>
            )}
          </View>
        </View>
        {/* //* Инженерные системы */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Инженерные системы</Text>

          <View style={styles.datatable}>
            {/* //* Система отопления */}
            <View style={styles.tableRow}>
              <Text style={styles.value}>Система отопления:</Text>
              <Text style={styles.label}>
                {engeneeringData.heating
                  ? `${engeneeringData.heating?.join(", ")}`
                  : ""}
              </Text>
            </View>
            {/* //* Система кондиционирования и вентиляции */}
            <View style={styles.tableRow}>
              <Text style={styles.value}>
                Система кондиционирования и вентиляции:
              </Text>
              <Text style={styles.label}>
                {engeneeringData.conditioning
                  ? `${engeneeringData.conditioning?.join(", ")}`
                  : ""}
              </Text>
            </View>
            {/* //* Система водоподготовки и фильтрации */}
            <View style={styles.tableRow}>
              <Text style={styles.value}>
                Система водоподготовки и фильтрации:
              </Text>
              <Text style={styles.label}>
                {engeneeringData.plumbing
                  ? `${engeneeringData.plumbing?.join(", ")}`
                  : ""}
              </Text>
            </View>
            {/* //* Слаботочные системы */}
            <View style={styles.tableRow}>
              <Text style={styles.value}>Слаботочные системы:</Text>
              <Text style={styles.label}>
                {engeneeringData.electric
                  ? `${engeneeringData.electric?.join(", ")}`
                  : ""}
              </Text>
            </View>
          </View>
        </View>

        {/* //* Комплектация сантехническим оборудованием*/}
        <View style={styles.section}>
          <Text style={styles.subheader}>
            Комплектация сантехническим оборудованием
          </Text>

          <View style={styles.datatable}>
            {premises.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.value}>{item.name}</Text>
                {/* <Text style={styles.label}>{item.room_furnishing?.name}</Text> */}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReactPDFFile;
