"use client";

import { useState } from "react";
import ContainerBox from "@/components/common/ContainerBox";
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
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phoneNumberInput";
import ru from "react-phone-number-input/locale/ru.json";
import { Label } from "@/components/ui/label";

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
      console.log("nextstep");

      setActiveStep((activeStep) => activeStep + 1);
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
      {/*//? Steps */}
      <nav className="max-w-[600px] mx-auto" aria-label="Progress">
        <ol
          role="list"
          className="//space-y-2 flex space-x-2 sm:space-x-4 space-y-0"
        >
          {steps.map((step, index) => (
            <li key={step.name} className="flex-1">
              {activeStep > index ? (
                <div
                  className="
                  group 
                  flex 
                  w-full 
                  flex-col 
                  border-l-4 
                  border-accent-light 
                  dark:border-accent-dark 
                  py-2 
                  pl-4 
                  transition-colors 
                  md:border-l-0 
                  md:border-t-4 
                  md:pb-0 
                  md:pl-0 
                  md:pt-4"
                >
                  {/* <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span> */}
                </div>
              ) : activeStep === index ? (
                <div
                  className="flex w-full flex-col //border-l-4 border-accent-light dark:border-accent-dark py-2 pl-4 border-l-0 border-t-4 pb-0 pl-0 pt-4"
                  aria-current="step"
                >
                  {/* <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span> */}
                </div>
              ) : (
                <div className="group flex w-full flex-col //border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 border-t-4 pb-0 pl-0 pt-4">
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
          {/* //! Step 1 */}
          {activeStep === 0 && (
            <section className="flex flex-col gap-y-4 max-w-[600px] mx-auto">
              <h1 className="text-2xl font-bold">Информация о клиенте</h1>
              <div className="sm:flex sm:space-x-2 w-full">
                <FormField
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Фамилия</FormLabel>
                      <FormControl>
                        <Input placeholder="Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:flex sm:space-x-2 w-full">
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Электронная почта</FormLabel>
                      <FormControl>
                        <Input placeholder="mail@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Номер телефона</FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry="RU"
                          initialValueFormat="national"
                          labels={ru}
                          withCountryCallingCode
                          international
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пол</FormLabel>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="-" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">-</SelectItem>
                        <SelectItem value="light">Муж</SelectItem>
                        <SelectItem value="dark">Жен</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </section>
          )}
          {/* //! Step 2 */}
          {activeStep === 1 && (
            <section className="flex flex-col gap-y-4 max-w-[600px] mx-auto">
              <h1 className="text-2xl font-bold">Адрес объекта</h1>
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пол</FormLabel>
                  </FormItem>
                )}
              />
            </section>
          )}
        </form>
      </Form>

      {/*//? Navigation */}
      <div className="mt-8 pt-5 max-w-[600px] mx-auto">
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
