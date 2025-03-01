import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "@/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, contact, message } = req.body;
  const destinationEmails = `${process.env.DESTINATION_EMAIL}` || "";

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [destinationEmails],
      subject: `${name} entrou em contato pelo portfólio`,
      react: EmailTemplate({
        message,
        email,
        contact,
        name,
      }),
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return res.status(500).json({ error: "Erro ao enviar o e-mail" });
  }
}
