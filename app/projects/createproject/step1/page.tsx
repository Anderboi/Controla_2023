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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phoneNumberInput";
import { DatePicker } from "@/components/ui/datePicker";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "step 1",
    name: "Client information",
    fields: [
      "firstName",
      "lastName",
      "middleName",
      "email",
      "phoneNumber",
      "gender",
    ],
  },
  {
    id: "step 2",
    name: "Project address",
    fields: ["country", "city", "street", "house", "room"],
  },
  {
    id: "step 3",
    name: "Project information",
    fields: [
      "area",
      "storeys",
      "purpose",
      "colivers",
      "estBudget",
      "startDate",
      "estFinalDate",
    ],
  },
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
    <section className="flex">
      <ContainerBox className="size-full text-primary-text-light dark:text-primary-text-dark">
        {/*//? Steps */}
        <nav className="//max-w-[900px] //mx-auto" aria-label="Progress">
          <ol
            role="list"
            className="//space-y-2 flex space-x-2 space-y-0 sm:space-x-4"
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
                    py-2 
                    pl-4 
                    transition-colors 
                    dark:border-accent-dark 
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
                    className="//border-l-4 flex w-full flex-col border-l-0 border-t-4 border-accent-light py-2 pb-0 pl-0 pl-4 pt-4 dark:border-accent-dark"
                    aria-current="step"
                  >
                    {/* <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span> */}
                  </div>
                ) : (
                  <div className="//border-l-4 group flex w-full flex-col border-t-4 border-gray-200 py-2 pb-0 pl-0 pl-4 pt-4 transition-colors md:border-l-0">
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

        {/* //? Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processForm)}>
            {/* //! Step 1 / activeStep 0  Информация о клиенте */}
            {activeStep === 0 && (
              <section className="block max-w-[900px] px-6 sm:mx-auto">
                <div className="flex flex-col gap-y-4">
                  <h1 className="max-w-[900px] pb-2 text-2xl font-bold">
                    Информация о клиенте
                  </h1>
                  <article className="max-w-[900px] sm:m-auto">
                    <div className="w-full sm:flex sm:space-x-2">
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
                        name="middleName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Отчество</FormLabel>
                            <FormControl>
                              <Input placeholder="Иванович" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full sm:flex sm:space-x-2">
                      <FormField
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Электронная почта</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="mail@example.com"
                                {...field}
                              />
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
                                // labels={ru}
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
                          <FormControl>
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
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </article>
                </div>
              </section>
            )}
            {/* //! Step 2 / activeStep 1 Адрес объекта */}
            {activeStep === 1 && (
              <section className="block max-w-[900px] px-6 sm:mx-auto">
                <h1 className="text-2xl font-bold">Адрес объекта</h1>
                <ContainerBox className="flex flex-col gap-y-4">
                  <div className="w-full sm:flex sm:space-x-2">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Страна</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Город</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Улица</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                  <div className="flex w-full space-x-2">
                    <FormField
                      control={form.control}
                      name="house"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Дом</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="room"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Квартира</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                </ContainerBox>
              </section>
            )}
            {/* //! Step 3 / activeStep 2 Общая информация */}
            {activeStep === 2 && (
              <section className="block max-w-[900px] px-6 sm:mx-auto">
                <h1 className="text-2xl font-bold">Общая информация</h1>
                <ContainerBox className="flex flex-col gap-y-4">
                  <div className="w-full sm:flex sm:space-x-2">
                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Площадь</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="100 м2"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="storeys"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Этажность</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full sm:flex sm:space-x-2">
                    <FormField
                      control={form.control}
                      name="colivers"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Количество проживающих</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="purpose"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Назначение</FormLabel>
                          <FormControl>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="-" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="living">Жилое</SelectItem>
                                <SelectItem value="commercial">
                                  Коммерческое
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="estBudget"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Приблизительный бюджет на ремонт</FormLabel>
                        <Input type="number" {...field} />
                      </FormItem>
                    )}
                  />
                  <div className="w-full sm:flex sm:space-x-2">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Начало выполнения проекта </FormLabel>
                          <DatePicker />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="estFinalDate"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Примерные сроки выполнения</FormLabel>
                          {/* //TODO: add field control */}
                          <DatePicker />
                        </FormItem>
                      )}
                    />
                  </div>
                </ContainerBox>
              </section>
            )}
            <button type="submit">Submit</button>
          </form>
        </Form>

        {/*//? Navigation */}
        <div className="mx-auto mt-8 max-w-[900px] pt-5">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={activeStep === 0}
              className="bg-white rounded px-2 py-1 text-sm font-semibold text-primary-text-light shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-primary-text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
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
              className="bg-white rounded px-2 py-1 text-sm font-semibold text-primary-text-light shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-primary-text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
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
    </section>
  );
};

export default Step1;
