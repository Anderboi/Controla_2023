import { z } from "zod";

export const FormDataSchema = z.object({
  //? Client Info
  firstName: z.string().min(3, "Имя должно содержать как минимум 3 буквы"),
  lastName: z.string().min(3, "Фамилия должна содержать как минимум 3 буквы"),
  email: z
    .string()
    .min(1, "Пожалуйста, введите свою почту")
    .email("Неправильный почтовый адрес"),
  phoneNumber: z.string().optional(),
  gender: z.any().optional(),

  //? Project Address
  country: z.string().min(1, "Пожалуйста, введите свое имя"),
  city: z.string(),
  street: z.string(),
  house: z.coerce.number().optional(),
  room: z.coerce.number().optional(),

  // ? Project Info
  purpose: z.string().optional(),
  area: z.coerce
    .number({
      required_error: "Пожалуйста, введите площадь вашего объекта",
      invalid_type_error: "Площадь должна быть числом",
    })
    .int()
    .positive()
    .gte(1),
  colivers: z.coerce.number().int().positive(),
  storeys: z.coerce.number().int().positive(),
  estBudget: z.coerce.number().int().positive(),
  startDate: z.date().optional(),
  estFinalDate: z.date().optional(),
});
