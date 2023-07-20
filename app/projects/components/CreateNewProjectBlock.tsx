'use client'

import Button from '@/components/common/inputs/Button';
import useAuthModal from '@/hooks/useAuthModal';
import useUploadModal from '@/hooks/useUploadModal';
import { useUser } from '@/hooks/useUser';
import React from 'react'

const CreateNewProjectBlock = () => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //TODO: check for subscription

    return uploadModal.onOpen();
  };
  
  return (
    <article
      className="
          m-auto
          flex
          max-w-sm
          flex-col
          items-center 
          justify-center 
          gap-6
        "
    >
      <h1>Еще нет ни одного проекта.</h1>
      <Button mode="action" onClick={onClick}>
        Создать первый проект
      </Button>
    </article>
  );
}

export default CreateNewProjectBlock