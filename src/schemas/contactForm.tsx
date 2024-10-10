"use client";
//Zod
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome é obrigatório." })
    .max(100, { message: "Nome não deve ser maior do que 100 caracteres" }),

  email: z
    .string()
    .min(1, { message: "O campo e-mail é obrigatório." })
    .email({ message: "Por favor, insira um e-mail válido." }),

  contact: z
    .string()
    .max(16, { message: "O contato pode ter no máximo 11 caracteres." }),

  message: z
    .string()
    .min(1, { message: "Você ainda não digitou sua linda mensagem. 🤭" })
    .max(5000, { message: "A mensagem pode ter no máximo 5000 caracteres." }),
});

export default contactFormSchema;
