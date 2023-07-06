'use client'

import Button from '@/components/common/inputs/Button';
import useUploadRoomsModal from '@/hooks/useUploadRoomsModal';
import React from 'react'

const AddRoomsBlock = () => {

  const uploadModal = useUploadRoomsModal();

  const onClick = () => {
    //TODO: check for subscription

    return uploadModal.onOpen();
  };
  
  return (
    <div>
      <Button mode='action' onClick={onClick}>Добавить помещения</Button>
    </div>
  )
}

export default AddRoomsBlock