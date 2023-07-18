export const engSystems = [
  { label: "Система кондиционирования и вентиляции", name: "conditioning" },
  { label: "Система водоподготовки и фильтрации", name: "plumbing" },
  { label: "Система отопления", name: "heating" },
  { label: "Слаботочная система", name: "electric" },
];

export const engeneeringSystems = {
  conditioning: [
    {
      id: 1,
      name: "existing",
      label: "Существующее",
    },
    {
      id: 2,
      name: "splitCondition",
      label: "Сплит-система кондиционирования",
    },
    {
      id: 3,
      name: "channelCondition",
      label: "Канальная система кондиционирования",
    },
    {
      id: 4,
      name: "ventilation",
      label: "Приточно-вытяжная система вентиляции",
    },
    {
      id: 5,
      name: "moisturing",
      label: "Увлажнитель воздуха канальный",
    },
    {
      id: 6,
      name: "breather",
      label: "Бризер",
    },
  ],
  heating: [
    { name: "existing", label: "Существующее" },
    { name: "radiators", label: "Радиаторы отопления" },
    { name: "convectors", label: "Конвекторы отопления" },
    { name: "warm_floor", label: "Теплый пол" },
    { name: "ir_radiators", label: "ИК радиаторы" },
    { name: "warm_plinth", label: "Теплый плинтус" },
  ],
  plumbing: [
    { name: "existing", label: "Существующее" },
    { name: "filter_station", label: "Станция очистки воды" },
    {
      name: "magistral_filters",
      label: "Магистральные фильтры очистки воды",
    },
    { name: "osmos_filters", label: "Установка фильтров обратного осмоса" },
  ],
};

