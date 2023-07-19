"use client";

import React, { useEffect, useState } from "react";

import UploadModal from "@/components/feature/modals/UploadProjectModal";
import AuthModal from "@/components/feature/modals/AuthModal";
import EngeneeringModal from '@/components/feature/modals/engeneering/EngeneeringModal';
import InfoModal from '@/components/feature/modals/InfoModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <EngeneeringModal />
      <InfoModal/>
    </>
  );
};

export default ModalProvider;
