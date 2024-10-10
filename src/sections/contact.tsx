// Components
import { SocialMediaButtons, ContactForm, LottieAnimation } from "@/components";
//Animations
import { ContactAnimation } from "@/animations";

const Contact = () => {
  return (
    <section className="flex flex-col w-[95%] md:w-full place-self-center gap-5 mt-5 mb-5">
      <h1 className="font-bold text-xl md:text-4xl">Entre em contato</h1>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col w-fit items-center md:order-2 md:max-h-96 2xl:pl-64">
          <LottieAnimation
            src={ContactAnimation}
            className="-mb-24 -mt-24 md:-mb-5 md:-mt-5 h-96"
          />
          <SocialMediaButtons />
        </div>

        <div className="flex flex-wrap w-full md:w-[700px] md:order-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
