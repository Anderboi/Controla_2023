"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const CreateNewProject = async () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      address_country: "",
      address_city: "",
      address_street: "",
      area: "",
      design_team: [],
      client: "",
    },
  });

  // const address_country = formData.get("address_country");
  // const address_city = formData.get("address_city");
  // const address_street = formData.get("address_street");
  // console.log(address_city);

  return <form></form>;
};

export default CreateNewProject;
