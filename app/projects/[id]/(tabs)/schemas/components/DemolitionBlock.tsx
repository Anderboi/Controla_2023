"use client";

import Accordion from "@/components/common/InfoBlock/Accordion";
import CheckboxGroup from "@/components/common/inputs/CheckboxGroup";
import React from "react";

const DemolitionBlock = () => {
  return (
    <Accordion title="Схема демонтажа конструкций">
      <CheckboxGroup name="0011">Demolition 01</CheckboxGroup>
      <CheckboxGroup name="0012">Demolition 02</CheckboxGroup>
      <CheckboxGroup name="0013">Demolition 03</CheckboxGroup>
    </Accordion>
  );
};

export default DemolitionBlock;
