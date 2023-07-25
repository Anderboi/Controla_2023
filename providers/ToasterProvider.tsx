"use client";

import { Toaster } from "react-hot-toast";

import React from "react";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: { background: "#2a2a2a", color: "#fff", padding: '8px 24px' },
        success: { iconTheme: { primary: "#4FD1A2", secondary: "#2a2a2a" } },
      }}
    />
  );
};

export default ToasterProvider;
