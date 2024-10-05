"use client";
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
import { Textarea } from "./ui/textarea";
//Schemas
import { contactFormSchema } from "@/schemas";

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      contact: "",
      message: "",
    },
  });

  const registerWithMask = useHookFormMask(form.register);

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[95%] md:w-[600px]"
      >
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

        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
