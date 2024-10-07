// Components
import { SocialMediaButtons, ContactForm } from "@/components";
//Images
import { ContactAnimation } from "@/images";
//Next
import Image from "next/image";

const Contact = () => {
  return (
    <section className="flex flex-col w-[95%] md:w-full place-self-center gap-5 mt-5 mb-5">
      <h1 className="font-bold text-xl md:text-4xl">Entre em contato</h1>

      <div className="flex flex-col md:flex-row md:gap-60">
        <div className="flex flex-col items-center justify-center gap-3 md:order-2">
          <Image
            src={ContactAnimation}
            alt="entre em contato"
            width={500}
            height={500}
            className="w-[95%] max-w-[320px] h-[205px]"
          />
          <SocialMediaButtons />
        </div>

        <div className="flex flex-wrap w-full md:w-fit justify-center md:order-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
