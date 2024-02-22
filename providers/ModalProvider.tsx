"use client";

import React, { useEffect, useState } from "react";

import UploadModal from "@/components/feature/modals/UploadProjectModal";
import AuthModal from "@/components/feature/modals/AuthModal";
import EngeneeringModal from '@/components/feature/modals/engeneering/EngeneeringModal';
import RoomInfoModal from "@/components/feature/modals/RoomInfoModal";
import ResidingModal from '@/components/feature/modals/residing/ResidingModal';
import UploadDataModal from '@/components/feature/modals/UploadDataModal';
import UploadProjectModal from '@/components/feature/modals/UploadProjectModal';

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
      <RoomInfoModal />
      <ResidingModal />
      <UploadDataModal/>
      <UploadProjectModal/>
    </>
  );
};

export default ModalProvider;
