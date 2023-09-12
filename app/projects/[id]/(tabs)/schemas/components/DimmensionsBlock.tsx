'use client'

import Accordion from '@/components/common/InfoBlock/Accordion';
import CheckboxGroup from '@/components/common/inputs/CheckboxGroup';
import React from 'react'

const DimmensionsBlock = () => {
  return (
    <Accordion title="Обмерный план">
      <CheckboxGroup name="001">Demolition 01</CheckboxGroup>
    </Accordion>
  );
}

export default DimmensionsBlock