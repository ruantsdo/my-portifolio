//React
import { FC } from "react";
//Zod
import { z } from "zod";
//Schemas
import { contactFormSchema } from "@/schemas";

type ContactFormData = z.infer<typeof contactFormSchema>;

const EmailTemplate: FC<Readonly<ContactFormData>> = ({
  message,
  email,
  contact,
  name,
}) => (
  <div>
    <h2>{name} entrou em contato pelo portfólio!</h2>
    <h3>Email de contato: {email}</h3>
    <h3>Número para contato: {contact ? contact : "Não informado"}</h3>
    <h4>{message}</h4>
  </div>
);

export default EmailTemplate;
