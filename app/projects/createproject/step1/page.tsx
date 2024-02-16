"use client";

import ContainerBox from "@/components/common/ContainerBox";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormDataSchema } from "@/lib/schema";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "step 1",
    name: "Client information",
    fields: ["firstName", "lastName", "email", "phoneNumber", "gender"],
  },
  {
    id: "step 2",
    name: "Project address",
    fields: ["country", "city", "street", "house", "apartment"],
  },
  { id: "step 3", name: "Project information" },
  { id: "step 4", name: "Inhabitants" },
  { id: "step 5", name: "Room list" },
  { id: "step 6", name: "Demolition information" },
  { id: "step 7", name: "Construction information" },
  { id: "step 8", name: "Colors information" },
  { id: "step 9", name: "Heating" },
  { id: "step 10", name: "Conditioning" },
  { id: "step 11", name: "Plumbing" },
  { id: "step 12", name: "Electric" },
  { id: "step 13", name: "Sanitary" },
  { id: "step 14", name: "Kitchen" },
  { id: "step 15", name: "Loundry" },
  { id: "step 16", name: "Bedroom" },
];

const Step1 = () => {
  const [activeStep, setActiveStep] = useState(0);

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    form.reset();
  };

  type FieldName = keyof Inputs;

  const nextStep = async () => {
    const fields = steps[activeStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // const form = useForm<Inputs>()

  return (
    <ContainerBox className="text-primary-text-light dark:text-primary-text-dark">
      {/*//? steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-2 md:flex md:space-x-4 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {activeStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-accent-light dark:border-accent-dark py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  {/* <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span> */}
                </div>
              ) : activeStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-accent-light dark:border-accent-dark py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  {/* <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span> */}
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  {/* <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span> */}
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)}>
          {activeStep === 0 && (
            <div>
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </form>
      </Form>

      {/*//? Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={activeStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={activeStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Step1;
