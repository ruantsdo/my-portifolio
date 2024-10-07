// Components
import { SocialMediaButtons, ContactForm, LottieAnimation } from "@/components";
//Animations
import { ContactAnimation } from "@/animations";

const Contact = () => {
  return (
    <section className="flex flex-col w-[95%] md:w-full place-self-center gap-5 mt-5 mb-5">
      <h1 className="font-bold text-xl md:text-4xl">Entre em contato</h1>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:order-2 md:max-h-96">
          <LottieAnimation
            src={ContactAnimation}
            className="-mb-5 -mt-5 max-h-96"
          />
          <SocialMediaButtons />
        </div>

        <div className="flex flex-wrap w-full md:w-fit md:order-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
