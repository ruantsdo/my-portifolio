"use client";
//React
import { useState } from "react";
//Zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//Hook Form
import { useForm } from "react-hook-form";
//Input Mask
import { useHookFormMask } from "use-mask-input";
//Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
//Schemas
import { contactFormSchema } from "@/schemas";
//Resend
import Image from "next/image";
//Icons
import { Loading } from "@/icons";

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [buttonText, setButtonText] = useState<string>("Enviar");
  const [buttonStyle, setButtonStyle] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const registerWithMask = useHookFormMask(form.register);

  const onSubmit = async (formData: ContactFormData) => {
    try {
      setIsSending(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        handleMessageSentSuccessfully();
      } else {
        console.error("Erro ao enviar o e-mail:", data);
        handleFailedToSendMessage();
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      handleFailedToSendMessage();
    } finally {
      setIsSending(false);
    }
  };

  const handleMessageSentSuccessfully = () => {
    setDisableButton(true);
    setButtonText("Mensagem enviada!");
    setButtonStyle("bg-green");

    setTimeout(() => {
      setButtonText("Obrigado! ❤️");
    }, 5000);

    setTimeout(() => {
      form.resetField("message");
      setButtonText("Enviar outra mensagem");
      setButtonStyle("bg-white");
      setDisableButton(false);
    }, 10000);
  };

  const handleFailedToSendMessage = () => {
    setDisableButton(true);
    setButtonText("Falha ao enviar mensagem...");
    setButtonStyle("bg-red");

    setTimeout(() => {
      setButtonText("Tente novamente em alguns instantes...");
    }, 5000);

    setTimeout(() => {
      setButtonText("Tentar novamente");
      setButtonStyle("bg-white");
      setDisableButton(false);
    }, 10000);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[95%] md:w-[600px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input placeholder="Informe seu nome aqui" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="exemplo@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={() => (
            <FormItem>
              <FormLabel>Telefone (Opcional)</FormLabel>
              <FormControl>
                <Input
                  {...registerWithMask("contact", ["(99) 9 9999-9999"], {
                    required: false,
                  })}
                  type="text"
                  placeholder="(XX) 9 XXXX-XXXX"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Digite sua mensagem aqui..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={disableButton}
          type="submit"
          className={`flex items-center justify-center w-full gap-2 transition-all ${buttonStyle}`}
        >
          {isSending && (
            <Image
              src={Loading}
              alt="load icon"
              className="w-6 h-6 animate-spin"
            />
          )}
          <p>{buttonText}</p>
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
