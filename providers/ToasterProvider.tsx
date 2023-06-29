"use client";

import { Toaster } from "react-hot-toast";

import React from "react";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: { background: "#2a2a2a", color: "#fff" },
      }}
    />
  );
};

export default ToasterProvider;
