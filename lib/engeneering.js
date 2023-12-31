export const engSystems = [
  { label: "Система конд-вания и вентиляции", name: "conditioning" },
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
      description: `Сплит-система - это кондиционер, система кондиционирования воздуха, состоящая из двух блоков: внешнего (компрессорно-конденсаторного агрегата) и внутреннего (испарительного). Внешний блок монтируется вне кондиционируемого помещения. Внутренний блок монтируется внутри кондиционируемого помещения или в вентиляционную систему здания. Друг с другом блоки соединяются медными теплоизолированными трубками`,
    },
    {
      id: 3,
      name: "channelCondition",
      label: "Канальная система кондиционирования",
      description: `Канальная система кондиционирования - это комплексное решение проблемы климата в доме. Она состоит из двух основных блоков: внутреннего и внешнего. В наружном блоке установлен компрессор, вентилятор и теплообменник конденсатора. Канальная система кондиционирования является скрытым решением для поддержания комфортной температуры и свежести воздуха в помещении.
      Канальная система кондиционирования имеет свои плюсы и минусы. Один из главных плюсов системы - скрытность, которая очень на руку внешнему виду интерьера. Внешне систему в готовом интерьере не видно.`,
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
    { id: 1, name: "existing", label: "Существующее" },
    { id: 2, name: "radiators", label: "Радиаторы отопления" },
    { id: 3, name: "convectors", label: "Конвекторы отопления" },
    { id: 4, name: "warm_floor", label: "Теплый пол" },
    { id: 5, name: "ir_radiators", label: "ИК радиаторы" },
    { id: 6, name: "warm_plinth", label: "Теплый плинтус" },
  ],
  plumbing: [
    { id: 1, name: "existing", label: "Существующее" },
    { id: 2, name: "filter_station", label: "Станция очистки воды" },
    {
      id: 3,
      name: "magistral_filters",
      label: "Магистральные фильтры очистки воды",
    },
    {
      id: 4,
      name: "osmos_filters",
      label: "Установка фильтров обратного осмоса",
    },
  ],
  electric: [
    { id: 1, name: "fire", label: "Пожарная сигнализация" },
    { id: 2, name: "water_leak", label: "Датчики протечки воды" },
    {
      id: 3,
      name: "light_control",
      label: "Управление освещением",
    },
    { id: 4, name: "smart_home", label: "Умный дом" },
  ],
};
