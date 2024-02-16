import { z } from "zod";

export const FormDataSchema = z.object({
  //? Client Info
  firstName: z.string().min(1, "Пожалуйста, введите свое имя"),
  lastName: z.string().min(1, "Пожалуйста, введите свою фамилию"),
  email: z
    .string()
    .min(1, "Пожалуйста, введите свою почту")
    .email("Неправильный почтовый адрес"),
  phoneNumber: z.string(),
  gender: z.string(),

  //? Project Address
  country: z.string().min(1, "Пожалуйста, введите свое имя"),
  city: z.string(),
  street: z.string(),
  house: z
    .number({
      required_error: "Пожалуйста, введите номер дома",
      invalid_type_error: "Номер дома должен быть цифрой",
    })
    .int()
    .positive()
    .gte(1),
  room: z.number({
      required_error: "Пожалуйста, введите номер квартиры",
      invalid_type_error: "Номер квартиры должен быть цифрой",
    })
    .int()
    .positive()
    .gte(1),




  
});
