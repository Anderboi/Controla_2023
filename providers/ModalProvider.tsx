"use client";

import React, { useEffect, useState } from "react";

import UploadRoomModal from "@/components/feature/modals/UploadRoomsListModal";
import UploadModal from "@/components/feature/modals/UploadProjectModal";
import AuthModal from "@/components/feature/modals/AuthModal";

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
      <UploadRoomModal />
    </>
  );
};

export default ModalProvider;
