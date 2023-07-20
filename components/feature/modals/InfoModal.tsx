import React from "react";
import SideModal from '@/components/common/SideModal';
import InfoBlock from '../infoblock/InfoBlock';

const InfoModal = () => {
  return (
    <SideModal isOpen={false} title={"title"} onChange={() => {}}>
      <div className="bg-elevated-1-bg-dark rounded-lg"><InfoBlock body={'sdfsdf'} label='sdfsdf'/></div>
    </SideModal>
  );
};

export default InfoModal;